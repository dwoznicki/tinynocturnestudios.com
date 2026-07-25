import { ComponentChildren, JSX } from "preact";
import { useWindowSize } from "../util/responsive.ts";
import { useMemo } from "preact/hooks";

export type ImageDimensionsConfig = {
  scale: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
};

export type HeaderImageConfig = {
  source: string;
  dimensions: {
    sm?: ImageDimensionsConfig;
    md?: ImageDimensionsConfig;
    lg?: ImageDimensionsConfig;
    xl?: ImageDimensionsConfig;
    "2xl"?: ImageDimensionsConfig;
  };
};

type PageHeaderProps = {
  children: ComponentChildren;
  images?: HeaderImageConfig[];
};
const PageHeader = ({ children, images }: PageHeaderProps) => {
  return (
    <div className="w-full text-center">
      <div className="inline-block relative">
        {images?.[0] && <HeaderImage image={images[0]} />}
        <h1 className="text-2xl uppercase font-extralight tracking-[0.5rem] md:text-5xl">
          {children}
        </h1>
        {images?.[1] && <HeaderImage image={images[1]} />}
      </div>
    </div>
  );
};
export default PageHeader;

type HeaderImageProps = {
  image: HeaderImageConfig;
};
const HeaderImage = ({ image }: HeaderImageProps) => {
  const windowSize = useWindowSize();
  const dimensionsStyle = useMemo<JSX.CSSProperties | undefined>(() => {
    if (windowSize.sm && image.dimensions.sm) {
      return image.dimensions.sm;
    }
    if (windowSize.md && image.dimensions.md) {
      return image.dimensions.md;
    }
    if (windowSize.lg && image.dimensions.lg) {
      return image.dimensions.lg;
    }
    if (windowSize.xl && image.dimensions.xl) {
      return image.dimensions.xl;
    }
    if (windowSize["2xl"] && image.dimensions["2xl"]) {
      return image.dimensions["2xl"];
    }
    return undefined;
  }, [windowSize]);

  if (!dimensionsStyle) {
    return null;
  }

  return (
    <img
      key={image.source}
      src={image.source}
      style={dimensionsStyle}
      className="absolute top-1/2 -translate-y-1/2 -z-10"
    />
  );
};
