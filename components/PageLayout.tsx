import { ComponentChildren } from "preact";
import SiteNavigationMenu from "../components/SiteNavigationMenu.tsx";

type PageLayoutProps = {
  header: ComponentChildren;
  children: ComponentChildren;
  url: URL;
};
const PageLayout = ({ header, children, url }: PageLayoutProps) => {
  return (
    <div className="p-6 md:p-12">
      <header className="pt-5 pb-10 md:pt-10 md:pb-28">
        {header}
      </header>
      <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-12">
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
