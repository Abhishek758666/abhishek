import { createFileRoute } from "@tanstack/react-router";
import VisitorsPage from "@/pages/visitors";

export const Route = createFileRoute("/visitors/")({
  component: VisitorsPage,
});
