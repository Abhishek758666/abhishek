import {
  BlockNoteEditor,
  BlockNoteSchema,
  createCodeBlockSpec,
} from "@blocknote/core";
import { filterSuggestionItems } from "@blocknote/core/extensions";
import "@blocknote/core/fonts/inter.css";
import { en } from "@blocknote/core/locales";
import "@blocknote/shadcn/style.css";
import {
  FormattingToolbar,
  FormattingToolbarController,
  getDefaultReactSlashMenuItems,
  getFormattingToolbarItems,
  SuggestionMenuController,
  useCreateBlockNote,
} from "@blocknote/react";
import {
  AIExtension,
  AIMenuController,
  AIToolbarButton,
  getAISlashMenuItems,
} from "@blocknote/xl-ai";
import { en as aiEn } from "@blocknote/xl-ai/locales";
import "@blocknote/xl-ai/style.css";
import { codeBlockOptions } from "@blocknote/code-block";
import { BlockNoteView } from "@blocknote/shadcn";

import { DefaultChatTransport } from "ai";
import { Save } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const BASE_URL = "http://localhost:3000/api/ai";

const STORAGE_KEY = "blocknote-editor-content";

console.log(BASE_URL);

export default function BlockNoteAiEditor() {
  const { resolvedTheme } = useTheme();
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const hasLoadedRef = useRef(false);

  // Load saved content from localStorage
  const loadSavedContent = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error("Error loading saved content:", error);
    }
    return null;
  };

  const editor = useCreateBlockNote({
    schema: BlockNoteSchema.create().extend({
      blockSpecs: {
        codeBlock: createCodeBlockSpec(codeBlockOptions),
      },
    }),

    dictionary: {
      ...en,
      ai: aiEn,
    },

    extensions: [
      AIExtension({
        transport: new DefaultChatTransport({
          api: `http://localhost:3000/api/ai`,
        }),
      }),
    ],
  });

  // Load saved content when editor is ready
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (editor && !hasLoadedRef.current) {
      const savedContent = loadSavedContent();
      if (savedContent) {
        editor.replaceBlocks(editor.document, savedContent);
      }
      hasLoadedRef.current = true;
    }
  }, [editor]);

  const handleSave = async () => {
    if (!editor) return;

    setIsSaving(true);
    try {
      const blocks = editor.document;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(blocks));
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    } catch (error) {
      console.error("Error saving content:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button
          onClick={handleSave}
          disabled={isSaving}
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <Save className="h-4 w-4" />
          {isSaving ? "Saving..." : isSaved ? "Saved!" : "Save"}
        </Button>
      </div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        formattingToolbar={false}
        slashMenu={false}
        style={{ paddingBottom: "300px" }}
      >
        <AIMenuController />
        <FormattingToolbarWithAI />
        <SuggestionMenuWithAI editor={editor} />
      </BlockNoteView>
    </div>
  );
}

function FormattingToolbarWithAI() {
  return (
    <FormattingToolbarController
      formattingToolbar={() => (
        <FormattingToolbar>
          {...getFormattingToolbarItems()}
          <AIToolbarButton />
        </FormattingToolbar>
      )}
    />
  );
}

function SuggestionMenuWithAI(props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editor: BlockNoteEditor<any, any, any>;
}) {
  return (
    <SuggestionMenuController
      triggerCharacter="/"
      getItems={async (query) =>
        filterSuggestionItems(
          [
            ...getDefaultReactSlashMenuItems(props.editor),
            ...getAISlashMenuItems(props.editor),
          ],
          query
        )
      }
    />
  );
}
