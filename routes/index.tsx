import { ComponentChildren } from "preact";
import { PageProps } from "$fresh/server.ts";
import PageHeader from "../islands/PageHeader.tsx";
import PageLayout from "../components/PageLayout.tsx";
import PieceGallery from "../islands/PieceGallery.tsx";

/** Centered label that introduces each section of the page. */
const SectionHeading = ({ children }: { children: ComponentChildren }) => {
  return (
    <h2 className="text-center text-xl uppercase font-extralight tracking-[0.5rem] md:text-3xl">
      {children}
    </h2>
  );
};

const HomePage = ({ url }: PageProps) => {
  return (
    <PageLayout
      url={url}
      header={
        <>
          <PageHeader>
            Tiny Nocturne Studios
          </PageHeader>
          {/* Written in sentence case and capitalised by styling, so screen
              readers and search results still get normal prose. */}
          <p className="mx-auto mt-5 max-w-xl text-center text-[0.7rem] uppercase font-extralight leading-loose tracking-[0.2rem] md:mt-7 md:text-sm">
            {/* Purely decorative, so screen readers skip them rather than
                announcing "sparkles" at both ends of the sentence. */}
            <span aria-hidden="true">✨</span>{" "}
            Whimsical, witchy ceramics, thoughtfully made for you or the goth with a heart of gold in your life
            {" "}
            <span aria-hidden="true">✨</span>
          </p>
        </>
      }
    >
      <div className="flex flex-col gap-y-24 md:gap-y-40">
        <section
          id="portfolio"
          className="flex flex-col gap-y-8 scroll-mt-16 md:scroll-mt-24"
        >
          <SectionHeading>Portfolio</SectionHeading>
          <PieceGallery />
        </section>

        <section
          id="about"
          className="flex flex-col gap-y-8 scroll-mt-16 md:scroll-mt-24"
        >
          <SectionHeading>About</SectionHeading>
          <div className="flex flex-col items-center gap-y-8">
            <img
              src="/images/profile.jpeg"
              alt="Aya Kusch carving a mug in her studio"
              className="w-full max-w-[16rem]"
            />
            <div className="max-w-2xl space-y-4 text-center">
              <p className="font-bold">
                Aya Kusch is a Bay Area based ceramic artist.
              </p>
              <p>
                She is inspired by literature, tattoo art, and art made by witchy women throughout history. She earned a BFA in Interdisciplinary Studies and a minor in writing and literature at California College for the Arts. She lives with her husband, their young son, and two rambunctious rabbits.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
export default HomePage;
