import { Handlers } from "$fresh/server.ts";

// The about section now lives on the home page. Anyone arriving at the old
// address gets sent to it.
export const handler: Handlers = {
  GET() {
    return new Response(null, {
      status: 307,
      headers: { location: "/#about" },
    });
  },
};
