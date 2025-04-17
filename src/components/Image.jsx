import product from "../product";

const Image = () => {
  return (
    <img
      src={product.imageUrl}
      alt={product.name}
      className="w-full h-64 md:h-full md:w-96 object-cover"
    />
  );
};

export default Image;
