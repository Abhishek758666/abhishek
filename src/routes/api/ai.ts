import { createXai } from "@ai-sdk/xai";
import {
	aiDocumentFormats,
	injectDocumentStateMessages,
	toolDefinitionsToToolSet,
} from "@blocknote/xl-ai/server";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText } from "ai";

export const maxDuration = 30;

// Get API key from environment variables
const API_KEY = process.env.XAI_API_KEY || process.env.GROK_API_KEY;



const xai = createXai({
	apiKey: "",
});

export const Route = createFileRoute("/api/ai")({
	server: {
		handlers: {
			POST: async ({ request }: { request: Request }) => {
				return new Response("hello world", {
					headers: {
						"Content-Type": "text/plain",
					},
				});
			},
		},
	},
});
