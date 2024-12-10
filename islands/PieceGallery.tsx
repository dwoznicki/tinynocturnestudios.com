import { pieces } from "../pieces.ts";

const PieceGallery = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      {pieces.map((pieceConfig) => (
        <a href={`/${pieceConfig.name}`} key={pieceConfig.name}>
          <img
            src={pieceConfig.images[0].source}
            alt={pieceConfig.images[0].alt}
            className="aspect-square object-cover"
          />
        </a>
      ))}
    </div>
  );
};
export default PieceGallery;
