import { PageProps } from "$fresh/server.ts";

export default function Greet({ params }: PageProps) {
  return <div>Hello {params.piece_name}</div>;
}

