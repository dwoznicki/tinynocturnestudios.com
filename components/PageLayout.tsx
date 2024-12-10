import { ComponentChildren } from "preact";
import SiteNavigationMenu from "../components/SiteNavigationMenu.tsx";

type PageLayoutProps = {
  header: ComponentChildren;
  children: ComponentChildren;
  url: URL;
};
const PageLayout = ({ header, children, url }: PageLayoutProps) => {
  return (
    <div className="p-12 bg-no-repeat">
      <header className="pt-10 pb-28">
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
