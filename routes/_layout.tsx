import { PageProps } from "$fresh/server.ts";
import SiteNavigationMenu from "../islands/SiteNavigationMenu.tsx";

const StandardPageLayout = ({ Component }: PageProps) => {
  return (
    <div className="p-8 flex gap-x-4">
      <aside>
        <SiteNavigationMenu />
      </aside>
      <main className="w-full">
        <Component />
      </main>
    </div>
  );
};
export default StandardPageLayout;
