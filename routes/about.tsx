import { PageProps } from "$fresh/server.ts";
import PageHeader from "../components/PageHeader.tsx";
import PageLayout from "../components/PageLayout.tsx";

const AboutPage = ({ url }: PageProps) => {
  return (
    <PageLayout
      url={url}
      header={
        <PageHeader
          images={[
            {
              source: "/images/bg_flower_moon.png",
              scale: "1.4",
              left: "-300px",
              top: "110px",
            },
            {
              source: "/images/bg_snake.png",
              scale: "2",
              top: "90px",
              right: "-340px",
            }
          ]}
        >
          About
        </PageHeader>
      }
    >
      <div className="flex flex-col gap-y-6">
        <div className="grid grid-cols-3 gap-x-4">
          <img src="/images/profile.jpg" alt="Artist profile picture" />
          <div className="col-span-2 space-y-4">
            <p>
              Aya Kusch is a Bay Area based ceramic artist.
            </p>
            <p>
              She is inspired by literature, tattoo art, and art made by witchy women throughout history. She earned a BFA in Interdisciplinary Studies and a minor in writing and literature at California College for the Arts. She works at a literary arts nonprofit based in San Francisco and lives with her husband and her pet rabbit. The rabbit is named Basho, and he embodies the great haiku poet in every way.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
export default AboutPage;
