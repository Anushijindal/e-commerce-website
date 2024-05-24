import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${products?._id}`)}
      className="w-[13rem] transition-all m-3 cursor-pointer border-2 border-gray-600 shadow-md hover:shadow-2xl hover:shadow-black hover:m-4"
    >
      <div className="h-[17rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={products.imgURL}
        />
      </div>
      <div>
        <div className="px-3 py-1 text-slate-700">
          <h1 className="font-bold opacity-50">{products.brand}</h1>
          <p>{products.title}</p>
        </div>
        <div className="flex items-center space-x-2 px-3 ">
          <p className="font-semibold">₹{products.discountedPrice}</p>
          <p className="line-through opacity-60">₹{products.price}</p>
          <p className="text-green-600 font-semibold">
            {products.discountPresent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
