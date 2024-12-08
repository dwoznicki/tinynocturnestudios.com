import { ComponentChildren, JSX } from "preact";
import SiteNavigationMenu from "../islands/SiteNavigationMenu.tsx";

type BackgroundImageConfig = {
  url: string;
  position: string;
  size: string;
};

const homePageBackgroundImageConfigs: BackgroundImageConfig[] = [
  {
    url: "/images/bg_swallow.png",
    position: "top -80px left 100px",
    size: "25%",
  },
  {
    url: "/images/bg_rose.png",
    position: "top -200px right",
    size: "30%",
  },
];

type PageLayoutProps = {
  header: ComponentChildren;
  children: ComponentChildren;
  url: URL;
  homePageBackgroundImages?: boolean;
};
const PageLayout = ({ header, children, url, homePageBackgroundImages }: PageLayoutProps) => {
  const backgroundStyle: JSX.CSSProperties = {};
  if (homePageBackgroundImages) {
    const backgroundImageItems: string[] = [];
    const backgroundPositionItems: string[] = [];
    const backgroundSizeItems: string[] = [];
    for (const bgImageConfig of homePageBackgroundImageConfigs) {
      backgroundImageItems.push(`url("${bgImageConfig.url}")`);
      backgroundPositionItems.push(bgImageConfig.position);
      backgroundSizeItems.push(bgImageConfig.size);
    }
    backgroundStyle.backgroundImage = backgroundImageItems.join(", ");
    backgroundStyle.backgroundPosition = backgroundPositionItems.join(", ");
    backgroundStyle.backgroundSize = backgroundSizeItems.join(", ");
  }
  return (
    <div
      className="p-12 bg-no-repeat"
      style={backgroundStyle}
    >
      <header className="pt-10 pb-24">
        {header}
      </header>
      <div className="flex gap-x-12">
        <aside>
          <SiteNavigationMenu path={url.pathname} />
        </aside>
        <main className="w-full">
          {children}
        </main>
      </div>
    </div>
  );
};
export default PageLayout;
