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

if (!API_KEY) {
	throw new Error(
		"XAI_API_KEY or GROK_API_KEY environment variable is required",
	);
}

const xai = createXai({
	apiKey: API_KEY,
});

export const Route = createFileRoute("/api/ai")({
	server: {
		handlers: {
			POST: async ({ request }: { request: Request }) => {
				try {
					let body: {
						messages?: unknown;
						toolDefinitions?: unknown;
					};

					try {
						body = await request.json();
					} catch {
						return new Response(
							JSON.stringify({
								error: "Invalid JSON in request body",
							}),
							{
								status: 400,
								headers: { "Content-Type": "application/json" },
							},
						);
					}

					const { messages, toolDefinitions } = body;

					if (!messages || !Array.isArray(messages)) {
						return new Response(
							JSON.stringify({
								error: "messages is required and must be an array",
							}),
							{
								status: 400,
								headers: { "Content-Type": "application/json" },
							},
						);
					}

					const result = streamText({
						// @ts-expect-error - xai model type compatibility with ai SDK
						model: xai("grok-3-latest"),
						system: aiDocumentFormats.html.systemPrompt,
						messages: convertToModelMessages(
							injectDocumentStateMessages(messages),
						),
						tools: toolDefinitions
							? // @ts-expect-error - toolDefinitions type from request body
								toolDefinitionsToToolSet(toolDefinitions)
							: undefined,
						toolChoice: "auto",
					});

					return result.toUIMessageStreamResponse();
				} catch (error) {
					console.error("AI API Error:", error);

					// Return appropriate error response
					const errorMessage =
						error instanceof Error ? error.message : "Internal server error";

					return new Response(
						JSON.stringify({
							error: errorMessage,
						}),
						{
							status: 500,
							headers: { "Content-Type": "application/json" },
						},
					);
				}
			},
		},
	},
});
