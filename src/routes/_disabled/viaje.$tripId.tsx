import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/_disabled/viaje/$tripId")({
  loader: () => { throw notFound(); },
  component: () => null,
});
