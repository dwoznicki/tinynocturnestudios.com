import { clsx } from "https://deno.land/x/clsx@0.3.1/mod.ts";

type SiteNavigationMenuProps = {
  path: string;
};
const SiteNavigationMenu = ({ path }: SiteNavigationMenuProps) => {
  return (
    <ul className="text-xl uppercase flex gap-y-4 gap-x-4 font-extralight bg-zinc-900 mt-4 justify-center md:justify-normal md:flex-col">
      <NavigationItem
        label="Portfolio"
        href="/"
        active={path === "/" || path === ""}
      />
      <NavigationItem
        label="About"
        href="/about"
        active={path === "/about"}
      />
    </ul>
  );
};
export default SiteNavigationMenu;

type NavigationItemProps = {
  label: string;
  href: string;
  active: boolean;
};
const NavigationItem = ({ label, href, active }: NavigationItemProps) => {
  return (
    <li
      className={clsx("max-md:border-b-2 md:pl-3 md:border-l-2", !active && "border-transparent")}
    >
      <a href={href} className="hover:opacity-80 transition-opacity duration-200">
        {label}
      </a>
    </li>
  );
};
