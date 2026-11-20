const destinosRapidos = [
  { nombre: "🌎 World", lat: 10, lng: -20, zoom: 2 },
  { nombre: "🇪🇨 Ecuador", lat: -1.8312, lng: -78.1834, zoom: 7 },
  { nombre: "🇺🇸 USA", lat: 36.8548, lng: -75.9927, zoom: 10 },
  { nombre: "🇹🇭 Thailand", lat: 15.8700, lng: 100.9925, zoom: 6 }
];

const recuerdos = [
  {
    "titulo": "Memory #1",
    "lugar": "Kao Thai Restaurant, Virginia Beach, VA",
    "fecha": "March 25th, 2025",
    "lat": 36.84805596692162,
    "lng": -76.018298552845,
    "foto": "fotos/recuerdo_001.jpg",
    "nota": "The day I stole your food just to get closer to you\nวันที่เค้าแอบขโมยอาหารเธอเพื่อจะได้เข้าใกล้เธอมากขึ้น"
  },
  {
    "titulo": "Memory #2",
    "lugar": "Mayflower, Virginia Beach, VA",
    "fecha": "March 31st, 2025",
    "lat": 36.862267596881956,
    "lng": -75.97988719700928,
    "foto": "fotos/recuerdo_002.jpg",
    "nota": "One of the few photos where we're all together. I know you miss those times\nหนึ่งในไม่กี่รูปที่พวกเราอยู่กันพร้อมหน้า รู้เลยว่าเธอคิดถึงช่วงเวลานั้น"
  },
  {
    "titulo": "Memory #3",
    "lugar": "Mayflower, Virginia Beach, VA",
    "fecha": "March 31st, 2025",
    "lat": 36.862267596881956,
    "lng": -75.97988719700928,
    "foto": "fotos/recuerdo_003.jpg",
    "nota": "The very first photo we have of the two of us hahaha\nรูปคู่รูปแรกของเราสองคน ฮ่าๆๆ"
  },
  {
    "titulo": "Memory #4",
    "lugar": "Lynnhaven Mall, Virginia Beach, VA",
    "fecha": "April 7th, 2025",
    "lat": 36.81605178582398,
    "lng": -76.07206838275866,
    "foto": "fotos/recuerdo_004.jpg",
    "nota": "When we had a \"first date\", even though we went out with all the guys\nตอนที่เราไป \"เดตแรก\" กัน ถึงจะออกไปกับพวกเพื่อนๆ ทุกคนก็เถอะ"
  },
  {
    "titulo": "Memory #5",
    "lugar": "Mayflower, Virginia Beach, VA",
    "fecha": "April 12th, 2025",
    "lat": 36.862267596881956,
    "lng": -75.97988719700928,
    "foto": "fotos/recuerdo_005.jpg",
    "nota": "My comfort zone\nเซฟโซนของเค้า"
  },
  {
    "titulo": "Memory #6",
    "lugar": "Mayflower, Virginia Beach, VA",
    "fecha": "April 14th, 2025",
    "lat": 36.862267596881956,
    "lng": -75.97988719700928,
    "foto": "fotos/recuerdo_006.jpg",
    "nota": "I love it when you enjoy the food you're eating so much\nชอบเวลาที่เธอเอร็ดอร่อยกับของกินมากๆ เลย"
  },
  {
    "titulo": "Memory #7",
    "lugar": "Atlantic Fun Park, Virginia Beach, VA",
    "fecha": "April 16th, 2025",
    "lat": 36.84367081173899,
    "lng": -75.97431790744506,
    "foto": "fotos/recuerdo_007.jpg",
    "nota": "Our first \"photu-besitu\"\n\"photu-besitu\" รูปแรกของเรา"
  },
  {
    "titulo": "Memory #8",
    "lugar": "Virginia Beach Boardwalk, VA",
    "fecha": "April 16th, 2025",
    "lat": 36.84367081173899,
    "lng": -75.97431790744506,
    "foto": "fotos/recuerdo_008.jpg",
    "nota": "One of my favorite photos\nหนึ่งในรูปโปรดของเค้า"
  },
  {
    "titulo": "Memory #9",
    "lugar": "Hilltop, Virginia Beach, VA",
    "fecha": "April 21st, 2025",
    "lat": 36.85200429598986,
    "lng": -76.02266202004803,
    "foto": "fotos/recuerdo_009.jpg",
    "nota": "You are so beautiful and cute!\nเธอสวยและน่ารักมากๆ เลย!"
  },
  {
    "titulo": "Memory #10",
    "lugar": "Virginia Aquarium, Virginia Beach, VA",
    "fecha": "April 28th, 2025",
    "lat": 36.82117363369014,
    "lng": -75.9834345210891,
    "foto": "fotos/recuerdo_010.jpg",
    "nota": "I love it when you stick your tongue out in photos hahahah\nชอบเวลาเธอแลบลิ้นเวลาถ่ายรูป ฮ่าๆๆ"
  },
  {
    "titulo": "Memory #11",
    "lugar": "Virginia Aquarium, Virginia Beach, VA",
    "fecha": "April 28th, 2025",
    "lat": 36.82117363369014,
    "lng": -75.9834345210891,
    "foto": "fotos/recuerdo_011.jpg",
    "nota": "You look amazing and you know it (thanks to whoever took the photo hehe)\nเธอดูดีมากและเธอก็รู้ตัว (ต้องขอบคุณคนถ่ายรูปนะ อิอิ)"
  },
  {
    "titulo": "Memory #12",
    "lugar": "Virginia Aquarium, Virginia Beach, VA",
    "fecha": "April 28th, 2025",
    "lat": 36.82117363369014,
    "lng": -75.9834345210891,
    "foto": "fotos/recuerdo_012.jpg",
    "nota": "Spending the day at the aquarium by your side was so lovely\nการได้ใช้เวลาที่อควาเรียมข้างๆ เธอวันนั้นมันดีมากๆ เลย"
  },
  {
    "titulo": "Memory #13",
    "lugar": "Virginia Aquarium, Virginia Beach, VA",
    "fecha": "April 28th, 2025",
    "lat": 36.82117363369014,
    "lng": -75.9834345210891,
    "foto": "fotos/recuerdo_013.jpg",
    "nota": "I love this because that day you were so excited about the Inside Out movie decorations\nชอบรูปนี้เพราะวันนั้นเธอตื่นเต้นกับการตกแต่งธีมหนัง Inside Out มากๆ"
  },
  {
    "titulo": "Memory #14",
    "lugar": "Virginia Beach Oceanfront, VA",
    "fecha": "April 30th, 2025",
    "lat": 36.86358805014405,
    "lng": -75.9777274079946,
    "foto": "fotos/recuerdo_014.jpg",
    "nota": "The first and last time we woke up early to watch the sunrise at the beach after several tries ahahaha\nครั้งแรกและครั้งสุดท้ายที่เราตื่นเช้าไปดูพระอาทิตย์ขึ้นที่ชายหาด หลังจากพยายามมาหลายรอบ ฮ่าๆๆ"
  },
  {
    "titulo": "Memory #15",
    "lugar": "Coquina, Virginia Beach, VA",
    "fecha": "May 4th, 2025",
    "lat": 36.85478358409365,
    "lng": -75.99270836312084,
    "foto": "fotos/recuerdo_015.jpg",
    "nota": "Praying for Joshua to come back to life\nภาวนาให้ Joshua ฟื้นคืนชีพ"
  },
  {
    "titulo": "Memory #16",
    "lugar": "Norfolk, VA",
    "fecha": "May 5th, 2025",
    "lat": 36.85377156277024,
    "lng": -76.20097416526191,
    "foto": "fotos/recuerdo_016.jpg",
    "nota": "That day we went out exploring and ate Açaí, and I really love this photo\nวันนั้นเราออกไปเดินสำรวจแล้วก็กินอาซาอิกัน ชอบรูปนี้มากๆ เลย"
  },
  {
    "titulo": "Memory #17",
    "lugar": "Lynnhaven, Virginia Beach, VA",
    "fecha": "May 7th, 2025",
    "lat": 36.81841686327256,
    "lng": -76.07109025935235,
    "foto": "fotos/recuerdo_017.mp4",
    "nota": "This day was amazing too, especially when we played Minecraft Dungeons ahahah\nวันนี้ก็สุดยอดเหมือนกัน โดยเฉพาะตอนที่เราเล่น Minecraft Dungeons ด้วยกัน ฮ่าๆๆ"
  },
  {
    "titulo": "Memory #18",
    "lugar": "Lynnhaven Mall, Virginia Beach, VA",
    "fecha": "May 7th, 2025",
    "lat": 36.81605178582398,
    "lng": -76.07206838275866,
    "foto": "fotos/recuerdo_018.jpg",
    "nota": "You look 10/10 in a cap\nเธอใส่หมวกแล้วดูดี 10/10 ไปเลย"
  },
  {
    "titulo": "Memory #19",
    "lugar": "Lynnhaven Mall, Virginia Beach, VA",
    "fecha": "May 7th, 2025",
    "lat": 36.81605178582398,
    "lng": -76.07206838275866,
    "foto": "fotos/recuerdo_019.mp4",
    "nota": "You already know I love this video when you say \"WAO\"\nเธอก็รู้อยู่แล้วว่าเค้าชอบคลิปนี้ตอนที่เธอพูดว่า \"WAO\""
  },
  {
    "titulo": "Memory #20",
    "lugar": "Sushi Vice, Virginia Beach, VA",
    "fecha": "May 11th, 2025",
    "lat": 36.85886803920998,
    "lng": -75.98043437661173,
    "foto": "fotos/recuerdo_020.jpg",
    "nota": "One of our last dates in VA\nหนึ่งในเดตสุดท้ายของเราที่ VA"
  },
  {
    "titulo": "Memory #21",
    "lugar": "Mount Trashmore Park, VA",
    "fecha": "May 12th, 2025",
    "lat": 36.82890620993264,
    "lng": -76.1276227322846,
    "foto": "fotos/recuerdo_021.jpg",
    "nota": "I hope you really enjoyed this day\nหวังว่าเธอจะชอบวันนี้มากๆ นะ"
  },
  {
    "titulo": "Memory #22",
    "lugar": "Mount Trashmore Park, VA",
    "fecha": "May 12th, 2025",
    "lat": 36.83065817271265,
    "lng": -76.12393516638075,
    "foto": "fotos/recuerdo_022.jpg",
    "nota": "I LOVE YOUUUUUU\nรักเธออออออ"
  },
  {
    "titulo": "Memory #23",
    "lugar": "Coquina, Virginia Beach, VA",
    "fecha": "May 13th, 2025",
    "lat": 36.85478358409365,
    "lng": -75.99270836312084,
    "foto": "fotos/recuerdo_023.jpg",
    "nota": "I want to paint another canvas with you\nอยากวาดรูประบายสีด้วยกันอีกจัง"
  },
  {
    "titulo": "Memory #24",
    "lugar": "GYE Airport, Guayaquil, Ecuador",
    "fecha": "July 11th, 2025",
    "lat": -2.1341764829924244,
    "lng": -79.8818601705608,
    "foto": "fotos/recuerdo_024.jpg",
    "nota": "Reunited again, now in Ecuador!\nได้กลับมาเจอกันอีกครั้ง คราวนี้ที่เอกวาดอร์!"
  },
  {
    "titulo": "Memory #25",
    "lugar": "Mall del Sol, Guayaquil, Ecuador",
    "fecha": "July 12th, 2025",
    "lat": -2.1558479977600755,
    "lng": -79.89213912329451,
    "foto": "fotos/recuerdo_025.jpg",
    "nota": "My princess 😠\nเจ้าหญิงของเค้า 😠"
  },
  {
    "titulo": "Memory #26",
    "lugar": "Home, Guayaquil, Ecuador",
    "fecha": "July 13th, 2025",
    "lat": -2.0628444614313977,
    "lng": -79.88997268102628,
    "foto": "fotos/recuerdo_026.jpg",
    "nota": "What I love most in this life: You and encebollado\nสิ่งที่รักที่สุดในชีวิตนี้: เธอ กับ เอ็นเซโบยาโด (Encebollado)"
  },
  {
    "titulo": "Memory #27",
    "lugar": "TUTI, Guayaquil, Ecuador",
    "fecha": "July 15th, 2025",
    "lat": -2.0800757167982264,
    "lng": -79.91679193842211,
    "foto": "fotos/recuerdo_027.jpg",
    "nota": "Shopping at TUTI\nช้อปปิ้งที่ TUTI"
  },
  {
    "titulo": "Memory #28",
    "lugar": "ESPOL, Guayaquil, Ecuador",
    "fecha": "July 16th, 2025",
    "lat": -2.145271196374796,
    "lng": -79.96660386527658,
    "foto": "fotos/recuerdo_028.jpg",
    "nota": "I want you to try this food and the yogurt again\nอยากให้เธอได้ลองกินอาหารนี้กับโยเกิร์ตอีกครั้งจัง"
  },
  {
    "titulo": "Memory #29",
    "lugar": "Montañita, Santa Elena, Ecuador",
    "fecha": "July 19th, 2025",
    "lat": -1.884243704273652,
    "lng": -80.73431911509806,
    "foto": "fotos/recuerdo_029.jpg",
    "nota": "Little beach trip with my family\nทริปเที่ยวทะเลกับครอบครัวของเค้า"
  },
  {
    "titulo": "Memory #30",
    "lugar": "Puerto López, Manabí, Ecuador",
    "fecha": "July 19th, 2025",
    "lat": -1.5591748300205088,
    "lng": -80.81237033490484,
    "foto": "fotos/recuerdo_030.jpg",
    "nota": "I love this photo, though I don't think you like it ahaha\nเค้าชอบรูปนี้มากนะ แต่คิดว่าเธอคงไม่ชอบ ฮ่าๆๆ"
  },
  {
    "titulo": "Memory #31",
    "lugar": "Malecón 2000, Guayaquil, Ecuador",
    "fecha": "July 18th, 2025",
    "lat": -2.189965933818175,
    "lng": -79.87862180646627,
    "foto": "fotos/recuerdo_031.mp4",
    "nota": "Super cute\nน่ารักสุดๆ"
  },
  {
    "titulo": "Memory #32",
    "lugar": "Nahim Isaías Museum, Guayaquil, Ecuador",
    "fecha": "July 22nd, 2025",
    "lat": -2.194534928087159,
    "lng": -79.88126664592541,
    "foto": "fotos/recuerdo_032.jpg",
    "nota": "Come back to Ecuador please\nกลับมาเอกวาดอร์อีกนะ พลีส"
  },
  {
    "titulo": "Memory #33",
    "lugar": "Isla Santay, Guayas, Ecuador",
    "fecha": "July 22nd, 2025",
    "lat": -2.1875183204601316,
    "lng": -79.8703284465146,
    "foto": "fotos/recuerdo_033.jpg",
    "nota": "This photo is also one of my favorites\nรูปนี้ก็เป็นหนึ่งในรูปโปรดของเค้าเหมือนกัน"
  },
  {
    "titulo": "Memory #34",
    "lugar": "9 de Octubre Market, Cuenca, Ecuador",
    "fecha": "July 24th, 2025",
    "lat": -2.895368432705689,
    "lng": -79.00121850040658,
    "foto": "fotos/recuerdo_034.jpg",
    "nota": "I know how much you loved this food\nรู้เลยว่าเธอชอบอาหารจานนี้มากแค่ไหน"
  },
  {
    "titulo": "Memory #35",
    "lugar": "Catedral, Cuenca, Ecuador",
    "fecha": "July 24th, 2025",
    "lat": -2.8974671078928442,
    "lng": -79.00500287894319,
    "foto": "fotos/recuerdo_035.jpg",
    "nota": "I love photos with goofy faces\nชอบรูปที่ทำหน้าตลกๆ แบบนี้ที่สุด"
  },
  {
    "titulo": "Memory #36",
    "lugar": "Turi Viewport, Cuenca, Ecuador",
    "fecha": "July 24th, 2025",
    "lat": -2.922301450124336,
    "lng": -79.01106310458682,
    "foto": "fotos/recuerdo_036.mp4",
    "nota": "You loved this day so much too. I want to go back to Cuenca with you and stay for more days\nวันนี้เธอก็ชอบมากๆ เหมือนกัน อยากกลับไป Cuenca กับเธออีกแล้วอยู่ด้วยกันหลายๆ วันเลย"
  },
  {
    "titulo": "Memory #37",
    "lugar": "Pailón del Diablo, Baños, Ecuador",
    "fecha": "July 26th, 2025",
    "lat": -1.4042498839580608,
    "lng": -78.2977538248517,
    "foto": "fotos/recuerdo_037.jpg",
    "nota": "I miss my Bubu\nคิดถึง Bubu ของเค้าจัง"
  },
  {
    "titulo": "Memory #38",
    "lugar": "Chocolat Factory, Baños de Agua Santa, Ecuador",
    "fecha": "July 27th, 2025",
    "lat": -1.4013616316781101,
    "lng": -78.42271144563597,
    "foto": "fotos/recuerdo_038.jpg",
    "nota": "Super crazy\nบ้าบอสุดๆ"
  },
  {
    "titulo": "Memory #39",
    "lugar": "GYE Airport, Guayaquil, Ecuador",
    "fecha": "July 29th, 2025",
    "lat": -2.1481534817950343,
    "lng": -79.88440261294488,
    "foto": "fotos/recuerdo_039.jpg",
    "nota": "Once again, distance separates us, but we are strong and we've got this\nอีกครั้งที่ระยะทางทำให้เราต้องห่างกัน แต่เราเข้มแข็งและจะผ่านมันไปได้แน่นอน"
  },
  {
    "titulo": "Memory #40",
    "lugar": "Suvarnabhumi Airport, Bangkok, Thailand",
    "fecha": "April 6th, 2026",
    "lat": 13.684392715944437,
    "lng": 100.74590822018826,
    "foto": "fotos/recuerdo_040.jpg",
    "nota": "After 8 months, the long-awaited moment arrived. We reunited in Thailand!\nหลังจาก 8 เดือน ช่วงเวลาที่รอคอยก็มาถึง เราได้กลับมาเจอกันที่ไทยแล้ว!"
  },
  {
    "titulo": "Memory #41",
    "lugar": "OneSiam Skywalk, Bangkok, Thailand",
    "fecha": "April 7th, 2026",
    "lat": 13.746294161081725,
    "lng": 100.53062490323146,
    "foto": "fotos/recuerdo_041.jpg",
    "nota": "How happy I am to be with you\nมีความสุขจังที่ได้อยู่กับเธอ"
  },
  {
    "titulo": "Memory #42",
    "lugar": "Central Udon, Udon Thani, Thailand",
    "fecha": "April 10th, 2026",
    "lat": 17.406023880404568,
    "lng": 102.80010739184813,
    "foto": "fotos/recuerdo_042.jpg",
    "nota": "This day was funny because you cried and I didn't 😎\nวันนี้ตลกมากเพราะเธอร้องไห้ แต่เค้าไม่ร้อง 😎"
  },
  {
    "titulo": "Memory #43",
    "lugar": "ร้านอาหารบ้านสวนแก้วคำแพง, Udon Thani, Thailand",
    "fecha": "April 11th, 2026",
    "lat": 17.495460929497483,
    "lng": 102.83987178771181,
    "foto": "fotos/recuerdo_043.jpg",
    "nota": "I really like this photo too\nรูปนี้เค้าก็ชอบมากๆ เหมือนกัน"
  },
  {
    "titulo": "Memory #44",
    "lugar": "ร้านอาหารบ้านสวนแก้วคำแพง, Udon Thani, Thailand",
    "fecha": "April 11th, 2026",
    "lat": 17.495460929497483,
    "lng": 102.83987178771181,
    "foto": "fotos/recuerdo_044.jpg",
    "nota": "I feel so grateful to your family for how warmly they treated and welcomed me\nรู้สึกขอบคุณครอบครัวเธอมากๆ สำหรับการต้อนรับและการดูแลที่อบอุ่นขนาดนี้"
  },
  {
    "titulo": "Memory #45",
    "lugar": "Udon Thani, Thailand",
    "fecha": "April 13th, 2026",
    "lat": 17.411442636567905,
    "lng": 102.795886214768,
    "foto": "fotos/recuerdo_045.jpg",
    "nota": "Songkran was incredible!\nสงกรานต์สนุกสุดยอดไปเลย!"
  },
  {
    "titulo": "Memory #46",
    "lugar": "Udon Thani, Thailand",
    "fecha": "April 14th, 2026",
    "lat": 17.408312414203895,
    "lng": 102.80177930925086,
    "foto": "fotos/recuerdo_046.jpg",
    "nota": "I love your face here ahaha\nชอบหน้าเธอในรูปนี้มาก ฮ่าๆๆ"
  },
  {
    "titulo": "Memory #47",
    "lugar": "Mae Fah Luang University, Chiang Rai, Thailand",
    "fecha": "April 19th, 2026",
    "lat": 20.04851958963392,
    "lng": 99.87720785338436,
    "foto": "fotos/recuerdo_047.mp4",
    "nota": "My chauffeur 😎\nคนขับรถส่วนตัวของเค้า 😎"
  },
  {
    "titulo": "Memory #48",
    "lugar": "Lampang, Thailand",
    "fecha": "April 17th, 2026",
    "lat": 18.29142210984157,
    "lng": 99.50386923319587,
    "foto": "fotos/recuerdo_048.jpg",
    "nota": "Another one of my favorite photos together\nอีกหนึ่งในรูปคู่โปรดของเรา"
  },
  {
    "titulo": "Memory #49",
    "lugar": "Udon Thani, Thailand",
    "fecha": "April 22nd, 2026",
    "lat": 17.40984213461284,
    "lng": 102.78025413559561,
    "foto": "fotos/recuerdo_049.jpg",
    "nota": "My expert Bubu\nBubu ผู้เชี่ยวชาญของเค้า"
  },
  {
    "titulo": "Memory #50",
    "lugar": "Bangkok, Thailand",
    "fecha": "April 26th, 2026",
    "lat": 13.72412773054786,
    "lng": 100.4674769945305,
    "foto": "fotos/recuerdo_050.mp4",
    "nota": "It's hooooot\nร้อนมากกกก"
  },
  {
    "titulo": "Memory #51",
    "lugar": "Bangkok, Thailand",
    "fecha": "April 26th, 2026",
    "lat": 13.72321224852202,
    "lng": 100.46772105654594,
    "foto": "fotos/recuerdo_051.jpg",
    "nota": "I LOVE YOU SOOOO MUCH\nรักเธอมากๆๆๆ เลย"
  },
  {
    "titulo": "Memory #52",
    "lugar": "Koh Kood, Thailand",
    "fecha": "April 29th, 2026",
    "lat": 11.670022086892866,
    "lng": 102.56359350754036,
    "foto": "fotos/recuerdo_052.jpg",
    "nota": "That day, the fire show was great, I wish we had seen it from the beginning hahaha\nวันนั้นโชว์ควงกระบองไฟดีมาก เสียดายน่าจะได้ดูตั้งแต่เริ่ม ฮ่าๆๆ"
  },
  {
    "titulo": "Memory #53",
    "lugar": "Wat Arun, Bangkok, Thailand",
    "fecha": "May 1st, 2026",
    "lat": 13.743906886567732,
    "lng": 100.48844131778321,
    "foto": "fotos/recuerdo_053.jpg",
    "nota": "I wanted us to match outfits, but we still looked amazing anyway\nอยากให้เราแต่งตัวแมตช์กันนะ แต่ถึงยังไงเราก็ดูดีสุดๆ อยู่ดี"
  },
  {
    "titulo": "Memory #54",
    "lugar": "Wat Arun, Bangkok, Thailand",
    "fecha": "May 1st, 2026",
    "lat": 13.743906886567732,
    "lng": 100.48844131778321,
    "foto": "fotos/recuerdo_054.jpg",
    "nota": "You are so hot!\nเธอฮอตมาก!"
  },
  {
    "titulo": "Memory #55",
    "lugar": "Dream World, Bangkok, Thailand",
    "fecha": "May 2nd, 2026",
    "lat": 13.988661159416036,
    "lng": 100.67520865636038,
    "foto": "fotos/recuerdo_055.jpg",
    "nota": "Cutieeees\nน่ารักกันจังเลยยย"
  },
  {
    "titulo": "Memory #56",
    "lugar": "Dream World, Bangkok, Thailand",
    "fecha": "May 2nd, 2026",
    "lat": 13.988661159416036,
    "lng": 100.67520865636038,
    "foto": "fotos/recuerdo_056.mp4",
    "nota": "I love seeing you so happy\nชอบเวลาเห็นเธอมีความสุขแบบนี้ที่สุด"
  },
  {
    "titulo": "Memory #57",
    "lugar": "Dream World, Bangkok, Thailand",
    "fecha": "May 2nd, 2026",
    "lat": 13.988661159416036,
    "lng": 100.67520865636038,
    "foto": "fotos/recuerdo_057.jpg",
    "nota": "Super dirty\nมอมแมมสุดๆ"
  },
  {
    "titulo": "Memory #58",
    "lugar": "Huai Khwang, Bangkok, Thailand",
    "fecha": "May 5th, 2026",
    "lat": 13.780198313373644,
    "lng": 100.57773628258242,
    "foto": "fotos/recuerdo_058.jpg",
    "nota": "I want to match outfits with you again\nอยากแต่งตัวแมตช์กับเธออีกจัง"
  },
  {
    "titulo": "Memory #59",
    "lugar": "Huai Khwang, Bangkok, Thailand",
    "fecha": "May 6th, 2026",
    "lat": 13.780198313373644,
    "lng": 100.57773628258242,
    "foto": "fotos/recuerdo_059.jpg",
    "nota": "I love you and miss you so much. Thank you for everything you've done for me. I'm sorry for everything bad that has happened. I hope we stay together until the end of time. See ya Bubu\nเค้ารักและคิดถึงเธอมากๆ ขอบคุณสำหรับทุกอย่างที่เธอทำให้เค้านะ ขอโทษสำหรับเรื่องไม่ดีทุกอย่างที่ผ่านมา หวังว่าเราจะอยู่ด้วยกันไปจนชั่วนิรันดร์นะ See ya Bubu"
  }
];

const rutasVuelo = [
  { desde: [-2.1894, -79.8891], hasta: [36.8548, -75.9927] },   // Ecuador -> Virginia Beach
  { desde: [36.8548, -75.9927], hasta: [13.6844, 100.7459] },   // Virginia Beach -> Bangkok
  { desde: [13.6844, 100.7459], hasta: [17.4083, 102.8018] },   // Bangkok -> Udon Thani
  { desde: [17.4083, 102.8018], hasta: [20.0485, 99.8772] },    // Udon Thani -> Chiang Rai
  { desde: [13.6844, 100.7459], hasta: [11.6700, 102.5636] }    // Bangkok -> Koh Kood
];

const proximosDestinos = [
  {
    titulo: "Next Adventure: Japan",
    lugar: "Tokyo & Kyoto, Japan",
    lat: 35.6762,
    lng: 139.6503,
    nota: "A trip waiting for us to walk under the cherry blossoms together. 🔒✨"
  },
  {
    titulo: "Next Adventure: Italy",
    lugar: "Rome & Amalfi Coast, Italy",
    lat: 41.9028,
    lng: 12.4964,
    nota: "Eating pasta and getting lost in old streets with you. 🔒✨"
  }
];