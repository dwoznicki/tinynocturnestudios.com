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
    name: "mini_vase",
    title: "Mini Vase",
    images: [
      {
        source: "/images/mini vase.jpg",
        alt:
          "Small black vase hand-painted with a blue flower, holding dried lavender",
      },
    ],
  },
  {
    name: "mini_vase_w_bear_1",
    title: "Mini Vase w Bear 1",
    images: [
      {
        source: "/images/mini vase w bear 1.jpg",
        alt:
          "The mini vase beside a small black bear figurine painted with white stars",
      },
    ],
  },
  {
    name: "mini_vase_w_bear_2",
    title: "Mini Vase w Bear 2",
    images: [
      {
        source: "/images/mini vase w bear 2.jpg",
        alt: "The mini vase and the star-painted bear seen from another angle",
      },
    ],
  },
  {
    name: "2_bears",
    title: "2 Bears",
    images: [
      {
        source: "/images/2 bears.jpg",
        alt:
          "Two small black bear figurines side by side, the larger one painted with white stars",
      },
    ],
  },
  {
    name: "1_vase",
    title: "1 Vase",
    images: [
      {
        source: "/images/1 vase.jpg",
        alt:
          "Slim black bud vase painted with a white and blue flower, holding a single dried stem",
      },
    ],
  },
  {
    name: "1_bear",
    title: "1 Bear",
    images: [
      {
        source: "/images/1 bear.jpg",
        alt:
          "Small black bear figurine flecked with pale speckles, seen from behind",
      },
    ],
  },
  {
    name: "lonely_vase",
    title: "Lonely Vase",
    images: [
      {
        source: "/images/lonely vase.jpg",
        alt:
          "Rounded black bud vase painted with a pale blue flower, holding dried lavender and grass",
      },
    ],
  },
];
