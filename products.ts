import { Product, Category } from './types';

// Helper to ensure Unsplash images have the right optimization params
const getImg = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const products: Product[] = [
  // --- Provided Inventory Items ---
  {
    id: "P001",
    title: "LED Bulb 9W",
    category: Category.Lighting,
    price: 110,
    short_desc: "Energy-efficient LED bulb for everyday home use.",
    long_desc: "This 9W LED bulb offers bright illumination with low power consumption, making it ideal for bedrooms, hallways, and living rooms.",
    specs: {
      "Brand": "Philips",
      "Model": "PH-9W-A1",
      "Wattage": "9W",
      "Base": "B22",
      "Material": "Polycarbonate",
      "Warranty": "2 Years"
    },
    images: [
      getImg("photo-1557431177-36141475cdd3"), // LED Bulb
      getImg("photo-1550989460-0adf9ea622e2")  // Room lighting
    ],
    stock: true,
    tags: ["led", "bulb", "lighting", "philips"],
    meta_title: "Philips 9W LED Bulb",
    meta_description: "Energy-efficient 9W LED bulb for everyday home use."
  },
  {
    id: "P002",
    title: "LED Bulb 12W",
    category: Category.Lighting,
    price: 150,
    short_desc: "High-brightness LED bulb for larger rooms.",
    long_desc: "12W LED bulb designed for higher lumen output and long lifespan. Suitable for halls and offices.",
    specs: {
      "Brand": "Syska",
      "Model": "SY-12W-X",
      "Wattage": "12W",
      "Color": "Cool White",
      "Material": "Plastic",
      "Warranty": "2 Years"
    },
    images: [
      getImg("photo-1623916997092-2621cb30128e"), // Bright LED
      getImg("photo-1496660547070-5cb0f9227d81")  // Living room
    ],
    stock: true,
    tags: ["led", "high brightness", "syska"],
    meta_title: "Syska 12W LED Bulb",
    meta_description: "High-brightness 12W LED bulb for larger rooms."
  },
  {
    id: "P003",
    title: "LED Ceiling Light 18W",
    category: Category.Lighting,
    price: 850,
    short_desc: "Slim LED ceiling light for modern interiors.",
    long_desc: "Stylish 18W LED ceiling light providing uniform brightness, ideal for bedrooms and kitchens.",
    specs: {
      "Brand": "Wipro",
      "Model": "WP-CL18",
      "Wattage": "18W",
      "Shape": "Round",
      "Material": "Aluminium",
      "Warranty": "2 Years"
    },
    images: [
      getImg("photo-1565814329452-e1efa11c5b89"), // Ceiling light
      getImg("photo-1513506003013-1b6341142f8c")  // Modern interior
    ],
    stock: true,
    tags: ["ceiling light", "led", "wipro"],
    meta_title: "Wipro 18W LED Ceiling Light",
    meta_description: "Slim LED ceiling light for modern interiors."
  },
  {
    id: "P004",
    title: "Ceiling Fan 56 Inch",
    category: Category.Fans,
    price: 2499,
    short_desc: "High-speed ceiling fan for large rooms.",
    long_desc: "Durable ceiling fan with copper motor delivering powerful airflow and silent operation.",
    specs: {
      "Brand": "Crompton",
      "Model": "CR-56X",
      "Size": "56 inch",
      "Material": "Metal",
      "Color": "White",
      "Warranty": "2 Years"
    },
    images: [
      getImg("photo-1618220179428-22790b461013"), // Ceiling fan
      getImg("photo-1631553123849-5553b652e72b")  // Fan in room
    ],
    stock: true,
    tags: ["fan", "ceiling fan", "crompton"],
    meta_title: "Crompton Ceiling Fan 56 Inch",
    meta_description: "High-speed ceiling fan for large rooms."
  },
  {
    id: "P005",
    title: "House Wire 1.5mm FR",
    category: Category.WiresAndCables,
    price: 2199,
    short_desc: "Flame-retardant copper wire for home wiring.",
    long_desc: "High-quality FR PVC insulated copper wire suitable for lighting circuits and switches.",
    specs: {
      "Brand": "Polycab",
      "Model": "PC-1.5FR",
      "Size": "1.5 mm",
      "Length": "90 m",
      "Material": "Copper",
      "Type": "FR PVC"
    },
    images: [
      getImg("photo-1544724569-5f546fd6dd2d"), // Wire roll
      getImg("photo-1596772719736-1e64627d2c38")  // Wires
    ],
    stock: true,
    tags: ["wire", "house wiring", "polycab"],
    meta_title: "Polycab House Wire 1.5mm FR",
    meta_description: "Flame-retardant copper wire for home wiring."
  },

  // --- Extended Catalog (Maintained for full demo experience) ---
  {
    id: "P006",
    title: "Modular 6A Switch",
    category: Category.SwitchesAndSockets,
    price: 55,
    short_desc: "Premium white modular switch, 6 Amp.",
    long_desc: "Smooth operation modular switch designed for modern homes. Polycarbonate material ensures yellowing resistance and shock-proof safety.",
    specs: {
      "Brand": "Anchor",
      "Rating": "6A",
      "Type": "1-Way",
      "Color": "White",
      "Warranty": "10 Years"
    },
    images: [
      getImg("photo-1521295121783-8a321d551ad2"),
      getImg("photo-1616400619175-5beda3a17896")
    ],
    stock: true,
    tags: ["switch", "modular", "anchor"],
    meta_title: "Anchor Modular 6A Light Switch",
    meta_description: "Premium modular electrical switch 6 Amp for home use."
  },
  {
    id: "P007",
    title: "HD CCTV Camera Bullet",
    category: Category.CCTVAndSecurity,
    price: 2400,
    short_desc: "1080p Outdoor Bullet Camera with Night Vision.",
    long_desc: "Secure your premises with this high-definition bullet camera. Features infrared night vision up to 20m and IP66 weatherproofing for outdoor use.",
    specs: {
      "Brand": "Hikvision",
      "Resolution": "2MP (1080p)",
      "Lens": "3.6mm",
      "IR Range": "20m",
      "Weatherproof": "IP66"
    },
    images: [
      getImg("photo-1558002038-109155714d9d"),
      getImg("photo-1557597774-9d273605dfa9")
    ],
    stock: true,
    tags: ["cctv", "camera", "security"],
    meta_title: "Hikvision 2MP Bullet CCTV Camera",
    meta_description: "1080p HD CCTV camera with night vision for outdoor security."
  },
  {
    id: "P008",
    title: "Exhaust Fan 200mm",
    category: Category.Fans,
    price: 1150,
    short_desc: "High-speed metal exhaust fan for kitchens.",
    long_desc: "Keep your kitchen fresh and smoke-free with this heavy-duty exhaust fan. Features a metal body and bird guard for durability and safety.",
    specs: {
      "Brand": "Havells",
      "Size": "200mm",
      "Speed": "1350 RPM",
      "Body": "Metal",
      "Warranty": "1 Year"
    },
    images: [
      getImg("photo-1620633437505-1a774187c53d"),
      getImg("photo-1585338107529-13afc5f02586")
    ],
    stock: true,
    tags: ["exhaust", "fan", "kitchen"],
    meta_title: "Havells 200mm Exhaust Fan",
    meta_description: "Heavy duty metal exhaust fan for kitchen ventilation."
  },
  {
    id: "P009",
    title: "Cat6 LAN Cable",
    category: Category.WiresAndCables,
    price: 8500,
    short_desc: "305m roll of high-speed Cat6 Ethernet cable.",
    long_desc: "Connect your office or home network with high-speed Gigabit Ethernet. This Cat6 cable features solid copper conductors for reliable data transmission up to 100 meters.",
    specs: {
      "Brand": "D-Link",
      "Type": "Cat6 UTP",
      "Length": "305m",
      "Conductor": "Solid Copper",
      "Speed": "1 Gbps"
    },
    images: [
      getImg("photo-1544197150-b99a580bb7a8"),
      getImg("photo-1558494949-ef010cbdcc31")
    ],
    stock: true,
    tags: ["cable", "lan", "internet"],
    meta_title: "D-Link Cat6 Ethernet Cable Roll",
    meta_description: "305m Cat6 LAN cable roll for high speed internet networking."
  },
  {
    id: "P010",
    title: "3-Pin Socket with Shutter",
    category: Category.SwitchesAndSockets,
    price: 120,
    short_desc: "Modular 3-pin socket with child safety shutter.",
    long_desc: "Ensure safety with this shuttered 3-pin socket. Prevents accidental contact with live parts. Compatible with all standard modular plates.",
    specs: {
      "Brand": "Anchor",
      "Rating": "6A/16A",
      "Modules": "2M",
      "Safety": "Shuttered",
      "Color": "White"
    },
    images: [
      getImg("photo-1616400619175-5beda3a17896"),
      getImg("photo-1521295121783-8a321d551ad2")
    ],
    stock: true,
    tags: ["socket", "plug", "power"],
    meta_title: "Modular 3-Pin Socket with Safety Shutter",
    meta_description: "Safe 3-pin power socket with child safety shutter."
  },
  {
    id: "P011",
    title: "Video Door Phone Kit",
    category: Category.CCTVAndSecurity,
    price: 12500,
    short_desc: "7-inch color display video door phone system.",
    long_desc: "See who is at the door before you open it. This video door phone kit includes a 7-inch indoor color screen and a rugged outdoor camera unit with 2-way audio.",
    specs: {
      "Brand": "Panasonic",
      "Screen": "7 inch LCD",
      "Camera": "Pinhole Lens",
      "Audio": "2-Way",
      "Warranty": "1 Year"
    },
    images: [
      getImg("photo-1585771724684-38269d6639fd"),
      getImg("photo-1558002038-109155714d9d")
    ],
    stock: false,
    tags: ["security", "door phone", "home safety"],
    meta_title: "Video Door Phone System 7 Inch",
    meta_description: "Home security video door phone kit with 7 inch display."
  },
  {
    id: "P012",
    title: "4-Socket Extension Board",
    category: Category.PowerAndAccessories,
    price: 450,
    short_desc: "Heavy duty extension board with individual switches.",
    long_desc: "Connect multiple devices safely with this 4-socket extension board. Features individual switches for each socket, a master fuse, and a 2-meter heavy-duty cord.",
    specs: {
      "Brand": "GM",
      "Sockets": "4",
      "Cord Length": "2 Meters",
      "Rating": "6A 240V",
      "Protection": "Fuse"
    },
    images: [
      getImg("photo-1621905251189-08b45d6a269e"),
      getImg("photo-1544724569-5f546fd6dd2d")
    ],
    stock: true,
    tags: ["extension", "power", "accessory"],
    meta_title: "4 Socket Extension Board with Switches",
    meta_description: "Safe 4-socket extension board with individual switches."
  },
  {
    id: "P013",
    title: "Digital Multimeter",
    category: Category.PowerAndAccessories,
    price: 750,
    short_desc: "Handheld digital multimeter for electrical testing.",
    long_desc: "Essential tool for any electrician. Measures voltage, current, and resistance with high accuracy. Includes continuity buzzer and data hold function.",
    specs: {
      "Brand": "Masaba",
      "Type": "Digital",
      "Display": "LCD",
      "Battery": "9V Included",
      "Safety": "CAT III"
    },
    images: [
      getImg("photo-1581092921461-eab62e97a783"),
      getImg("photo-1581147036324-c17ac41efa63")
    ],
    stock: true,
    tags: ["multimeter", "tool", "testing"],
    meta_title: "Digital Multimeter Voltage Tester",
    meta_description: "Portable digital multimeter for electrical maintenance and testing."
  }
];