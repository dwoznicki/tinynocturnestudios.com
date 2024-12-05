type ImageConfig = {
  source: string;
  alt: string;
  link: string;
};

const imageConfigs: ImageConfig[] = [
  {
    source: "/images/fvkKYspn.jpeg",
    alt: "cups 1",
    link: "#",
  },
  {
    source: "/images/3W0jNbgk.jpeg",
    alt: "cups 2",
    link: "#",
  },
  {
    source: "/images/6fxCE560.jpeg",
    alt: "cups 3",
    link: "#",
  },
  {
    source: "/images/90clE_IM.jpeg",
    alt: "cups 4",
    link: "#",
  },
  {
    source: "/images/94dRg9ps.jpeg",
    alt: "cups 5",
    link: "#",
  },
  {
    source: "/images/EQqO2Eo4.jpeg",
    alt: "cups 6",
    link: "#",
  },
  {
    source: "/images/VGBJ8lPY.jpeg",
    alt: "cups 7",
    link: "#",
  },
  {
    source: "/images/mO5Uy3VY.jpeg",
    alt: "cups 8",
    link: "#",
  },
  {
    source: "/images/nFXFACyM.jpeg",
    alt: "cups 9",
    link: "#",
  },
  {
    source: "/images/xceto1rU.jpeg",
    alt: "cups 11",
    link: "#",
  },
];

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {imageConfigs.map((imageConfig) => (
        <a href={imageConfig.link} key={imageConfig.alt}>
          <img
            src={imageConfig.source}
            alt={imageConfig.alt}
            className="aspect-square object-cover"
          />
        </a>
      ))}
    </div>
  );
};
export default ImageGallery;
