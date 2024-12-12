import { PageProps } from "$fresh/server.ts";
import PageHeader from "../components/PageHeader.tsx";
import PageLayout from "../components/PageLayout.tsx";
import { pieces } from "../pieces.ts";

export default function Greet({ params, url }: PageProps) {
  const piece = pieces.find((p) => p.name === params.piece_name);

  if (!piece) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        Clay structure not found.
      </div>
    );
  }

  return (
    <PageLayout
      url={url}
      header={
        <PageHeader>
          {piece.title}
        </PageHeader>
      }
    >
      <div>
        {piece.images.map((image) => (
          <img src={image.source} alt={image.alt} style={{height: 400}} />
        ))}
      </div>
    </PageLayout>
  );
}

