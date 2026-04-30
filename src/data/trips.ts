import paris from "@/assets/dest-paris.jpg";
import machu from "@/assets/dest-machu.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import bali from "@/assets/dest-bali.jpg";
import nyc from "@/assets/dest-nyc.jpg";
import patagonia from "@/assets/dest-patagonia.jpg";

export type Trip = {
  id: string;
  name: string;
  country: string;
  region: "Europa" | "América" | "Asia" | "África" | "Oceanía";
  nights: number;
  priceFrom: number;
  image: string;
  tag?: string;
};

export const trips: Trip[] = [
  { id: "paris", name: "París esencial", country: "Francia", region: "Europa", nights: 7, priceFrom: 1890, image: paris, tag: "Romántico" },
  { id: "machu", name: "Machu Picchu místico", country: "Perú", region: "América", nights: 9, priceFrom: 2150, image: machu, tag: "Aventura" },
  { id: "dubai", name: "Dubái contemporáneo", country: "EAU", region: "Asia", nights: 6, priceFrom: 2390, image: dubai, tag: "Lujo" },
  { id: "bali", name: "Bali sereno", country: "Indonesia", region: "Asia", nights: 10, priceFrom: 2490, image: bali, tag: "Bienestar" },
  { id: "nyc", name: "Nueva York icónica", country: "EE. UU.", region: "América", nights: 5, priceFrom: 1690, image: nyc, tag: "Ciudad" },
  { id: "patagonia", name: "Patagonia salvaje", country: "Chile", region: "América", nights: 8, priceFrom: 2890, image: patagonia, tag: "Naturaleza" },
];
