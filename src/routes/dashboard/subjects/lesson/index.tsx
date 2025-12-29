import { createFileRoute } from "@tanstack/react-router";
import LessonPage from "@/pages/lesson";

export const Route = createFileRoute("/dashboard/subjects/lesson/")({
  component: LessonPage,
});
