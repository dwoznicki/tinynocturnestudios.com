export type PieceConfig = {
  name: string;
  title: string;
  images: ImageConfig[];
};

export type ImageConfig = {
  source: string;
  alt: string;
};

export const pieces: PieceConfig[] = [
  {
    name: "moon",
    title: "Moon",
    images: [
      {
        source: "/images/MOON 1.jpg",
        alt: ""
      },
      {
        source: "/images/MOON 2.jpg",
        alt: ""
      },
      {
        source: "/images/MOON 3.jpg",
        alt: ""
      },
    ],
  },
  {
    name: "peony",
    title: "Peony",
    images: [
      {
        source: "/images/PEONY 1.jpg",
        alt: ""
      },
      {
        source: "/images/PEONY 2.jpg",
        alt: ""
      },
      {
        source: "/images/PEONY 3.jpg",
        alt: ""
      },
    ],
  },
  {
    name: "peony_blue",
    title: "Peony blue",
    images: [
      {
        source: "/images/PEONY BLUE 1.jpg",
        alt: ""
      },
      {
        source: "/images/PEONY BLUE 2.jpg",
        alt: ""
      },
      {
        source: "/images/PEONY BLUE 3.jpg",
        alt: ""
      },
    ],
  },
  {
    name: "snake",
    title: "Snake",
    images: [
      {
        source: "/images/SNAKE 1.jpg",
        alt: ""
      },
      {
        source: "/images/SNAKE 2.jpg",
        alt: ""
      },
      {
        source: "/images/SNAKE 3.jpg",
        alt: ""
      },
    ],
  },
  {
    name: "sprig",
    title: "Sprig",
    images: [
      {
        source: "/images/SPRIG 1.jpg",
        alt: ""
      },
      {
        source: "/images/SPRIG 2.jpg",
        alt: ""
      },
      {
        source: "/images/SPRIG 3.jpg",
        alt: ""
      },
    ],
  },
  {
    name: "swallow",
    title: "Swallow",
    images: [
      {
        source: "/images/SWALLOW 1.jpg",
        alt: ""
      },
      {
        source: "/images/SWALLOW 2.jpg",
        alt: ""
      },
      {
        source: "/images/SWALLOW 3.jpg",
        alt: ""
      },
    ],
  },
  {
    name: "teeth",
    title: "Teeth",
    images: [
      {
        source: "/images/TEETH 1.jpg",
        alt: ""
      },
      {
        source: "/images/TEETH 2.jpg",
        alt: ""
      },
    ],
  },
  {
    name: "teeth_sake",
    title: "Teeth Sake",
    images: [
      {
        source: "/images/TEETH SAKE 1.jpg",
        alt: ""
      },
      {
        source: "/images/TEETH SAKE 2.jpg",
        alt: ""
      },
    ],
  },
];
