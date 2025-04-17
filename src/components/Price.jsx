import product from "../product";

const Price = () => {
  return (
    <p className="text-2xl font-bold text-red-500 mb-4">
      ${product.price.toFixed(2)}
    </p>
  );
};

export default Price;
