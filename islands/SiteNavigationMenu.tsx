import { clsx } from "https://deno.land/x/clsx@0.3.1/mod.ts";
import { useEffect, useRef, useState } from "preact/hooks";

const sections = [
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
];

type SiteNavigationMenuProps = {
  path: string;
};
const SiteNavigationMenu = ({ path }: SiteNavigationMenuProps) => {
  const onePage = path === "/" || path === "";
  const activeSection = useActiveSection(onePage);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // The about section is pale, so the menu has to darken to stay visible on it.
  const onLightSection = onePage && activeSection === "about";

  // Record the section on the body so the page can shift its own palette.
  useEffect(() => {
    document.body.dataset.section = activeSection;
  }, [activeSection]);

  // While the menu is open, a tap anywhere else or the escape key dismisses it.
  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: Event) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    globalThis.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      globalThis.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="fixed top-6 left-6 z-20 md:top-12 md:left-12"
    >
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(!open)}
        className={clsx(
          "flex flex-col gap-y-[7px] p-2 backdrop-blur-sm transition-colors duration-1000 ease-[cubic-bezier(0.45,0,0.55,1)]",
          onLightSection ? "bg-slate-300/70" : "bg-zinc-800/70",
        )}
      >
        <MenuLine
          dark={onLightSection}
          className={clsx(open && "translate-y-[8px] rotate-45")}
        />
        <MenuLine dark={onLightSection} className={clsx(open && "opacity-0")} />
        <MenuLine
          dark={onLightSection}
          className={clsx(open && "-translate-y-[8px] -rotate-45")}
        />
      </button>

      <nav
        id="site-menu"
        aria-hidden={!open}
        className={clsx(
          "absolute left-0 top-12 transition-opacity duration-200",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul
          className={clsx(
            "flex flex-col gap-y-4 p-2 text-xl uppercase font-extralight backdrop-blur-sm transition-colors duration-1000 ease-[cubic-bezier(0.45,0,0.55,1)]",
            onLightSection ? "bg-slate-300/90" : "bg-zinc-800/90",
          )}
        >
          {sections.map((section) => (
            <NavigationItem
              key={section.id}
              label={section.label}
              href={onePage ? `#${section.id}` : `/#${section.id}`}
              active={onePage
                ? activeSection === section.id
                : section.id === "portfolio"}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default SiteNavigationMenu;

/** One of the three stacked lines that make up the menu button. */
const MenuLine = (
  { dark, className }: { dark: boolean; className?: string },
) => {
  return (
    <span
      className={clsx(
        // Folding into an X stays quick, while the colour drifts at the same
        // gentle pace as the page behind it.
        "block h-px w-7",
        "[transition:transform_200ms_ease-in-out,opacity_200ms_ease-in-out,background-color_1000ms_cubic-bezier(0.45,0,0.55,1)]",
        dark ? "bg-slate-900" : "bg-zinc-50",
        className,
      )}
    />
  );
};

/**
 * Tracks which section the reader is currently looking at, so the menu marker
 * follows along as they scroll.
 */
const useActiveSection = (enabled: boolean) => {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const update = () => {
      // The last section can be too short to ever reach the marker line, so
      // once we're at the bottom of the page it always wins.
      const atBottom = globalThis.innerHeight + globalThis.scrollY >=
        document.body.scrollHeight - 2;
      if (atBottom) {
        setActive(elements[elements.length - 1].id);
        return;
      }

      // A section becomes active once its top edge passes a line a third of
      // the way down the viewport.
      const line = globalThis.innerHeight / 3;
      let current = elements[0];
      for (const element of elements) {
        if (element.getBoundingClientRect().top <= line) {
          current = element;
        }
      }
      setActive(current.id);
    };

    update();
    globalThis.addEventListener("scroll", update, { passive: true });
    globalThis.addEventListener("resize", update);
    return () => {
      globalThis.removeEventListener("scroll", update);
      globalThis.removeEventListener("resize", update);
    };
  }, [enabled]);

  return active;
};

type NavigationItemProps = {
  label: string;
  href: string;
  active: boolean;
  onNavigate: () => void;
};
const NavigationItem = (
  { label, href, active, onNavigate }: NavigationItemProps,
) => {
  return (
    <li className={clsx("pl-3 border-l-2", !active && "border-transparent")}>
      <a
        href={href}
        onClick={onNavigate}
        className="hover:opacity-80 transition-opacity duration-200"
      >
        {label}
      </a>
    </li>
  );
};
