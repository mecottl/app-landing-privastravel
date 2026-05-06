import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/_disabled/nosotros")({
  loader: () => { throw notFound(); },
  component: () => null,
});
