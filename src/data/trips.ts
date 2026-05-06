import paris from "@/assets/dest-paris.jpg";
import machu from "@/assets/dest-machu.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import bali from "@/assets/dest-bali.jpg";
import nyc from "@/assets/dest-nyc.jpg";
import patagonia from "@/assets/dest-patagonia.jpg";

export type ItineraryDay = { day: number; title: string; description: string };
export type Hotel = { name: string; category: string; nights: number; board: string };
export type RoomPricing = { type: string; price: number; note?: string };
export type OptionalTour = { name: string; duration: string; price: number };

export type Trip = {
  id: string;
  name: string;
  country: string;
  region: "Europa" | "América" | "Asia" | "África" | "Oceanía";
  nights: number;
  priceFrom: number;
  image: string;
  tag?: string;
  summary: string;
  itinerary: ItineraryDay[];
  airlines: string[];
  departureDates: string[];
  includes: string[];
  excludes: string[];
  hotels: Hotel[];
  pricing: RoomPricing[];
  optionalTours: OptionalTour[];
  requirements: { passport: string; visa: string; vaccines?: string; other?: string };
  notes: string[];
};