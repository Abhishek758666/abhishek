import { ClientOnly } from "@tanstack/react-router";
import BlockNoteAiEditor from "./components/ai-editor";

const LessonPage = () => {
  return (
    <ClientOnly>
      <BlockNoteAiEditor />
    </ClientOnly>
  );
};

export default LessonPage;
