import { clsx } from "https://deno.land/x/clsx@0.3.1/mod.ts";

type SiteNavigationMenuProps = {
  path: string;
};
const SiteNavigationMenu = ({ path }: SiteNavigationMenuProps) => {
  return (
    <ul className="text-2xl uppercase flex flex-col gap-y-4 font-extralight">
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
      className={clsx("pl-3 border-l-2", !active && "border-l-transparent")}
    >
      <a href={href} className="hover:opacity-80 transition-opacity duration-200">
        {label}
      </a>
    </li>
  );
};
