import { createClient } from "@supabase/supabase-js";
import type { Trip, ItineraryDay, Hotel, RoomPricing, OptionalTour } from "@/data/trips";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

type TripRow = {
  id: string;
  name: string;
  country: string;
  region: string;
  nights: number;
  price_from: number;
  image: string;
  tag: string | null;
  summary: string;
  itinerary: ItineraryDay[];
  airlines: string[];
  departure_dates: string[];
  includes: string[];
  excludes: string[];
  hotels: Hotel[];
  pricing: RoomPricing[];
  optional_tours: OptionalTour[];
  requirements: { passport: string; visa: string; vaccines?: string; other?: string };
  notes: string[];
};

function mapRow(row: TripRow): Trip {
  return {
    id: row.id,
    name: row.name,
    country: row.country,
    region: row.region as Trip["region"],
    nights: row.nights,
    priceFrom: row.price_from,
    image: row.image,
    tag: row.tag ?? undefined,
    summary: row.summary,
    itinerary: row.itinerary,
    airlines: row.airlines,
    departureDates: row.departure_dates,
    includes: row.includes,
    excludes: row.excludes,
    hotels: row.hotels,
    pricing: row.pricing,
    optionalTours: row.optional_tours,
    requirements: row.requirements,
    notes: row.notes,
  };
}

export async function getTrips(): Promise<Trip[]> {
  const { data, error } = await supabase.from("trips").select("*").order("price_from");
  if (error) throw new Error(error.message);
  return (data as TripRow[]).map(mapRow);
}

export async function getTripById(id: string): Promise<Trip | null> {
  const { data, error } = await supabase.from("trips").select("*").eq("id", id).maybeSingle();
  if (error || !data) return null;
  return mapRow(data as TripRow);
}
