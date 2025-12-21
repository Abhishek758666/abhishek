import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chatbot/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_portfolio/chatbot/"!</div>;
}
