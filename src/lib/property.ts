const BASE = "https://yevhenii199.github.io/rent-apartment-in-sutomore/images";

export const property = {
  name: "Lucia's Apartment",
  location: "Sutomore, Montenegro",
  pricePerNight: 70,
  currency: "€",
  tagline: "A quiet retreat, 100 meters from the Adriatic shore.",
  description:
    "Spend your vacation near the shore but still in a quiet neighbourhood, just 100m away from the beach. Located in the southern area of Sutomore, you will find everything you need for a beautiful vacation.",
  host: {
    name: "Luka Scepanovic",
    languages: ["English", "Serbian", "Russian"],
    phone: "+382 69 575 726",
    instagram: "https://www.instagram.com/luciasapartment/",
    telegram: "https://t.me/scepan_l",
    whatsapp: "https://wa.me/38269575726",
    email: "scepanluka@gmail.com",
  },
  coords: { lat: 42.131, lng: 19.0667 },
  images: {
    hero: `${BASE}/terrace.webp`,
    parking: `${BASE}/parking.webp`,
    terrace: `${BASE}/terrace.webp`,
    room1: `${BASE}/room-1.1.webp`,
    room2: `${BASE}/room-1.2.webp`,
    kitchen1: `${BASE}/kitchen.1.1.webp`,
    kitchen2: `${BASE}/kitchen.1.2.webp`,
    living1: `${BASE}/living-room.1.1.webp`,
    living2: `${BASE}/living-room.1.2.webp`,
    bathroom1: `${BASE}/bathroom.1.1.webp`,
    bathroom2: `${BASE}/bathroom.1.2.webp`,
  },
};

export const galleryImages = [
  { src: `${BASE}/terrace.webp`, label: "Terrace", area: "tall" },
  { src: `${BASE}/living-room.1.1.webp`, label: "Living room" },
  { src: `${BASE}/room-1.1.webp`, label: "Bedroom" },
  { src: `${BASE}/kitchen.1.1.webp`, label: "Kitchen", area: "wide" },
  { src: `${BASE}/bathroom.1.1.webp`, label: "Bathroom" },
  { src: `${BASE}/room-1.2.webp`, label: "Bedroom" },
  { src: `${BASE}/living-room.1.2.webp`, label: "Living room" },
  { src: `${BASE}/parking.webp`, label: "Parking", area: "wide" },
  { src: `${BASE}/kitchen.1.2.webp`, label: "Kitchen" },
  { src: `${BASE}/bathroom.1.2.webp`, label: "Bathroom" },
] as const;
