import ImageGallery from "../islands/ImageGallery.tsx";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <h1 className="flex justify-center">Tiny Nocturne Studios</h1>
      <ImageGallery />
    </div>
  );
};
export default HomePage;
