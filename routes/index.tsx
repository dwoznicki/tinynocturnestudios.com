import { PageProps } from "$fresh/server.ts";
import PageHeader from "../components/PageHeader.tsx";
import PageLayout from "../components/PageLayout.tsx";
import PieceGallery from "../islands/PieceGallery.tsx";

const HomePage = ({ url }: PageProps) => {
  return (
    <PageLayout
      url={url}
      header={
        <PageHeader
          images={[
            {
              source: "/images/bg_swallow.png",
              scale: "0.5",
              left: "-500px",
              top: "-200px",
            },
            {
              source: "/images/bg_rose.png",
              scale: "0.7",
              right: "-550px",
              top: "-70px",
            }
          ]}
        >
          Tiny Nocturne Studios
        </PageHeader>
      }
    >
      <div className="flex flex-col gap-y-12 bg-no-repeat">
        <PieceGallery />
      </div>
    </PageLayout>
  );
};
export default HomePage;
