import { useState, useEffect } from "preact/hooks";

export type WindowSize = {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  "2xl": boolean;
  width: number;
};

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
    width: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = globalThis.screen.width;
      setWindowSize({
        sm: width < 768,
        md: width >= 768,
        lg: width >= 1024,
        xl: width >= 1280,
        "2xl": width >= 1536,
        width,
      });
    };
    handleResize();
    globalThis.addEventListener("resize", handleResize);
    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};
