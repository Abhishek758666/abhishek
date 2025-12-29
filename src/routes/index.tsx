import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/pages/landing";
import { createServerFn } from "@tanstack/react-start";

const returnStg = async () => {
  return "Hello World";
};

const getStg = createServerFn({ method: "GET" }).handler(
  async () => await returnStg()
);

export const Route = createFileRoute("/")({
  component: LandingPage,
  loader: async () => await getStg(),
});
