import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/_disabled/experiencias")({
  loader: () => { throw notFound(); },
  component: () => null,
});
