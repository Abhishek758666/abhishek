import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/demo')({
server:{
  handlers:{
    GET: async ({ request }: { request: Request }) => {
      console.log(request.body);
      return new Response("Hello World", {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
}
})

