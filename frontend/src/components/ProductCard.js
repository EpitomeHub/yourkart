import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="font-bold text-xl">${product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2">Add to Cart</button>
    </div>
  );
};

export default ProductCard;