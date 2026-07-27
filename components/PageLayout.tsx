import { ComponentChildren } from "preact";
import SiteNavigationMenu from "../islands/SiteNavigationMenu.tsx";
import Instagram from "./icons/Instagram.tsx";

type PageLayoutProps = {
  header: ComponentChildren;
  children: ComponentChildren;
  url: URL;
};
const PageLayout = ({ header, children, url }: PageLayoutProps) => {
  return (
    <div className="p-6 md:p-12">
      <SiteNavigationMenu path={url.pathname} />
      {/*
        The negative margins let the banner bleed past the page padding so it
        reads as a full-width strip across the top. Its text colour is pinned
        rather than inherited, so it stays legible when the about section
        lightens the rest of the page.
      */}
      <header className="-mt-6 -mx-6 px-6 pt-10 pb-8 mb-8 bg-slate-700 text-zinc-50 md:-mt-12 md:-mx-12 md:px-12 md:pt-20 md:pb-12 md:mb-20">
        {header}
      </header>
      <main>
        {children}
      </main>
      <footer className="flex justify-center pt-24 md:pt-40">
        <a
          href="https://www.instagram.com/tinynocturnestudios/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tiny Nocturne Studios on Instagram"
          className="hover:opacity-70 transition-opacity duration-200"
        >
          <Instagram />
        </a>
      </footer>
    </div>
  );
};
export default PageLayout;
