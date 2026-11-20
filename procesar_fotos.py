import os
import json
import subprocess
from PIL import Image, ExifTags, ImageOps

try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError:
    pass

try:
    import imageio_ffmpeg
    FFMPEG_EXE = imageio_ffmpeg.get_ffmpeg_exe()
except ImportError:
    FFMPEG_EXE = "ffmpeg"

CARPETA_ORIGEN = "fotos_originales"
CARPETA_DESTINO = "fotos"
ARCHIVO_SALIDA = "recuerdos.js"
ANCHO_MAXIMO = 1000

EXT_IMAGEN = (".jpg", ".jpeg", ".png", ".heic")
EXT_VIDEO = (".mov", ".mp4", ".m4v")

os.makedirs(CARPETA_DESTINO, exist_ok=True)

def convertir_a_grados(valor):
    d = float(valor[0])
    m = float(valor[1])
    s = float(valor[2])
    return d + (m / 60.0) + (s / 3600.0)

def obtener_datos_exif(imagen):
    exif_raw = imagen.getexif()
    if not exif_raw:
        return None, None, ""

    exif = {ExifTags.TAGS.get(k, k): v for k, v in exif_raw.items()}
    fecha_raw = exif.get("DateTimeOriginal") or exif.get("DateTime") or ""
    fecha = fecha_raw.split(" ")[0].replace(":", "/") if fecha_raw else ""

    # En Pillow moderno, GPSInfo se obtiene con get_ifd(0x8825)
    gps_info = exif_raw.get_ifd(0x8825) if hasattr(exif_raw, "get_ifd") else exif.get("GPSInfo")
    if not gps_info:
        return None, None, fecha

    gps = {ExifTags.GPSTAGS.get(k, k): v for k, v in gps_info.items()}
    if "GPSLatitude" in gps and "GPSLongitude" in gps:
        lat = convertir_a_grados(gps["GPSLatitude"])
        if gps.get("GPSLatitudeRef") != "N":
            lat = -lat
        lng = convertir_a_grados(gps["GPSLongitude"])
        if gps.get("GPSLongitudeRef") != "E":
            lng = -lng
        return round(lat, 6), round(lng, 6), fecha

    return None, None, fecha

def procesar_imagen(ruta_origen, ruta_destino):
    with Image.open(ruta_origen) as img:
        lat, lng, fecha = obtener_datos_exif(img)
        img = ImageOps.exif_transpose(img).convert("RGB")
        if img.width > ANCHO_MAXIMO:
            alto = int((ANCHO_MAXIMO / img.width) * img.height)
            img = img.resize((ANCHO_MAXIMO, alto), Image.Resampling.LANCZOS)
        img.save(ruta_destino, "JPEG", quality=82, optimize=True)
    return lat, lng, fecha

def convertir_video_a_mp4(ruta_origen, ruta_destino):
    comando = [
        FFMPEG_EXE, "-y", "-i", ruta_origen,
        "-vf", "scale='min(1080,iw)':-2",
        "-vcodec", "libx264", "-crf", "26", "-preset", "fast",
        "-acodec", "aac", "-b:a", "128k",
        "-movflags", "+faststart",
        ruta_destino
    ]
    subprocess.run(comando, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

# Agrupar archivos por nombre base para detectar parejas de Live Photos (ej. IMG_001.jpg + IMG_001.mov)
grupos = {}
for nombre in sorted(os.listdir(CARPETA_ORIGEN)):
    ruta = os.path.join(CARPETA_ORIGEN, nombre)
    if not os.path.isfile(ruta):
        continue
    base, ext = os.path.splitext(nombre)
    ext_lower = ext.lower()
    if ext_lower in EXT_IMAGEN or ext_lower in EXT_VIDEO:
        grupos.setdefault(base, {})
        if ext_lower in EXT_IMAGEN:
            grupos[base]["imagen"] = ruta
        else:
            grupos[base]["video"] = ruta

recuerdos = []

for idx, (base, archivos) in enumerate(grupos.items(), start=1):
    tiene_img = "imagen" in archivos
    tiene_vid = "video" in archivos

    lat, lng, fecha = None, None, ""
    ruta_foto_final = ""
    miniatura = None

    if tiene_img and tiene_vid:
        # ES UNA LIVE PHOTO (pareja imagen + video)
        print(f"🎬 Live Photo detectada: {base}")
        nombre_thumb = f"recuerdo_{idx:03d}_thumb.jpg"
        nombre_mp4 = f"recuerdo_{idx:03d}.mp4"
        lat, lng, fecha = procesar_imagen(archivos["imagen"], os.path.join(CARPETA_DESTINO, nombre_thumb))
        convertir_video_a_mp4(archivos["video"], os.path.join(CARPETA_DESTINO, nombre_mp4))
        ruta_foto_final = f"fotos/{nombre_mp4}"
        miniatura = f"fotos/{nombre_thumb}"

    elif tiene_vid:
        # VIDEO SUELTO
        print(f"🎥 Procesando video: {base}")
        nombre_mp4 = f"recuerdo_{idx:03d}.mp4"
        convertir_video_a_mp4(archivos["video"], os.path.join(CARPETA_DESTINO, nombre_mp4))
        ruta_foto_final = f"fotos/{nombre_mp4}"

    elif tiene_img:
        # FOTO NORMAL
        nombre_jpg = f"recuerdo_{idx:03d}.jpg"
        lat, lng, fecha = procesar_imagen(archivos["imagen"], os.path.join(CARPETA_DESTINO, nombre_jpg))
        ruta_foto_final = f"fotos/{nombre_jpg}"

    if lat is None or lng is None:
        print(f"⚠️  Sin GPS: {base} -> Se asignó coordenada temporal de Guayaquil.")
        lat, lng = -2.1894, -79.8891

    item = {
        "titulo": f"Memory #{idx}",
        "lugar": "Guayaquil, Ecuador",
        "fecha": fecha,
        "lat": lat,
        "lng": lng,
        "foto": ruta_foto_final,
        "nota": "Write a sweet note here."
    }
    if miniatura:
        item["miniatura"] = miniatura

    recuerdos.append(item)

# Escribir recuerdos.js completo con configuraciones incluidas
contenido_js = f"""const destinosRapidos = [
  {{ nombre: "🌎 World", lat: 10, lng: -20, zoom: 2 }},
  {{ nombre: "🇪🇨 Ecuador", lat: -1.8312, lng: -78.1834, zoom: 7 }},
  {{ nombre: "🇺🇸 USA", lat: 36.816000, lng: -76.072028, zoom: 10 }},
  {{ nombre: "🇹🇭 Thailand", lat: 13.7563, lng: 100.5018, zoom: 6 }}
];

const recuerdos = {json.dumps(recuerdos, indent=2, ensure_ascii=False)};

const rutasVuelo = [
  {{ desde: [-2.1894, -79.8891], hasta: [36.816000, -76.072028] }},
  {{ desde: [36.816000, -76.072028], hasta: [13.745629, 100.529996] }},
  {{ desde: [13.745629, 100.529996], hasta: [19.823339, 99.762698] }}
];

const proximosDestinos = [
  {{
    titulo: "Next Adventure: Japan",
    lugar: "Tokyo & Kyoto, Japan",
    lat: 35.6762,
    lng: 139.6503,
    nota: "A trip waiting for us to walk under the cherry blossoms together. 🔒✨"
  }},
  {{
    titulo: "Next Adventure: Italy",
    lugar: "Rome & Amalfi Coast, Italy",
    lat: 41.9028,
    lng: 12.4964,
    nota: "Eating pasta and getting lost in old streets with you. 🔒✨"
  }}
];
"""

with open(ARCHIVO_SALIDA, "w", encoding="utf-8") as f:
    f.write(contenido_js)

print(f"✅ ¡Listo! {len(recuerdos)} recuerdos procesados en '{ARCHIVO_SALIDA}'.")