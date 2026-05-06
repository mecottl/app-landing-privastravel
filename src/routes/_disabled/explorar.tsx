import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/_disabled/explorar")({
  loader: () => { throw notFound(); },
  component: () => null,
});
