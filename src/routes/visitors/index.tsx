import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { instanceToPlain } from "class-transformer";
import { Notes } from "@/entities/notes";
import { AppDataSource, connectDatabase } from "@/lib/database";
import VisitorsPage from "@/pages/visitors";

const getVisitors = createServerFn({ method: "GET" }).handler(async () => {
  await connectDatabase();

  const notes = await AppDataSource.getRepository(Notes).find();
  return instanceToPlain(notes.filter((note) => note.verified)) as Notes[];
});

export const Route = createFileRoute("/visitors/")({
  component: VisitorsPage,
  loader: async () => await getVisitors(),
});
