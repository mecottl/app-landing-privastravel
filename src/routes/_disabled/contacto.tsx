import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/_disabled/contacto")({
  loader: () => { throw notFound(); },
  component: () => null,
});
