import { ComponentChildren } from "preact";

export type HeaderImageConfig = {
  source: string;
  scale: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
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
        <h1 className="text-5xl uppercase font-extralight tracking-[0.5rem]">
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
  return (
    <img
      key={image.source}
      src={image.source}
      style={{
        scale: image.scale,
        left: image.left,
        top: image.top,
        right: image.right,
        bottom: image.bottom,
      }}
      className="absolute top-1/2 -translate-y-1/2 -z-10"
    />
  );
};
