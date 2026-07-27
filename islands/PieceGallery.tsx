import { pieces } from "../pieces.ts";

const PieceGallery = () => {
  return (
    <div className="grid mx-auto max-w-5xl lg:grid-cols-3 md:grid-cols-2 gap-8">
      {pieces.map((pieceConfig) => (
        <a href={`/${pieceConfig.name}`} key={pieceConfig.name}>
          {/*
            Tiles stay square so the grid lines up, but the photo is fitted
            inside rather than cropped to fill — some pieces are tall enough
            that a square crop would slice off the top or bottom of the piece.
          */}
          <img
            src={pieceConfig.images[0].source}
            alt={pieceConfig.images[0].alt}
            className="aspect-square w-full object-contain"
          />
        </a>
      ))}
    </div>
  );
};
export default PieceGallery;
