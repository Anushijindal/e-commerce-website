import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({products}) => {
  const navigate=useNavigate();
  return (
    <div onClick={() => navigate(`/product/${products?._id}`)} className="cursor-pointer flex flex-col rounded-md shadow-md items-center overflow-hidden w-[12rem] border-2 border-gray-200 ">
      <div className="h-[12rem] w-[10rem] my-3">
        <img
          className="rounded-md object-cover object-top w-full h-full"
          src={products.imgURL}
          alt=""
        />
      </div>
      <div>
        <h1 className="mx-1 font-semibold text-center my-1 text-sm">
          {products.brand}
        </h1>
        <p className="text-sm text-slate-700 text-center my-1 mx-2">
         {products.title}
        </p>
      </div>
    </div>
  );
};

export default Cards;
