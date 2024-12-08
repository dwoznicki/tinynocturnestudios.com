import { PageProps } from "$fresh/server.ts";
import PageHeader from "../components/PageHeader.tsx";
import PageLayout from "../components/PageLayout.tsx";

const AboutPage = ({ url }: PageProps) => {
  return (
    <PageLayout
      url={url}
      header={<PageHeader>About</PageHeader>}
    >
      <div className="flex flex-col gap-y-6">
        <div className="grid grid-cols-3 gap-x-4">
          <img src="/images/profile.jpg" alt="Artist profile picture" />
          <div className="col-span-2">
            <p>
              The artist is a major cutie.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum metus et venenatis placerat. Donec in vestibulum dui. Mauris quis libero ultricies nisi finibus placerat a vitae massa. Integer sapien odio, bibendum non suscipit ut, pretium sed est. Donec tincidunt, leo at rutrum viverra, felis ipsum luctus mauris, sed mattis mauris magna ut arcu. Fusce ornare aliquam nibh et posuere. Donec facilisis, mi ut tempus eleifend, felis diam gravida sem, vitae interdum massa odio at felis. Nam a mollis enim. Donec sit amet tristique ex. Morbi eget dapibus metus, sit amet placerat est. Praesent a facilisis ipsum. Nam tincidunt augue at dui interdum, vel facilisis tortor auctor. Integer porta finibus massa sit amet dignissim.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
export default AboutPage;
