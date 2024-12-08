import { PageProps } from "$fresh/server.ts";
import PageHeader from "../components/PageHeader.tsx";
import PageLayout from "../components/PageLayout.tsx";
import ImageGallery from "../islands/ImageGallery.tsx";

const HomePage = ({ url }: PageProps) => {
  return (
    <PageLayout
      url={url}
      header={<PageHeader>Tiny Nocturne Studios</PageHeader>}
      homePageBackgroundImages
    >
      <div className="flex flex-col gap-y-12 bg-no-repeat">
        <ImageGallery />
      </div>
    </PageLayout>
  );
};
export default HomePage;
