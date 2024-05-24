import React from "react";
import StarIcon from '@mui/icons-material/Star';
const OrderDetailCard = ({data}) => {
  console.log(data)
  return (
    <div className="flex space-x-80">
      <div className="flex space-x-1">
        <div className="w-[7rem] h-[7rem] p-3">
          <img
            className="w-full h-full object-cover object-top"
            src={`${data.product[0].imgURL}`}
            alt=""
          />
        </div>
        <div className="py-2 font-semibold space-y-1">
          <p>Men Solid Pure Cotton Straight Kurta</p>
          <div className="flex space-x-7">
            <div className="flex space-x-1 opacity-50 text-sm">
              <p>Color:</p>
              <p>{data.product[0].color}</p>
            </div>
            <div className="flex space-x-1 opacity-50 text-sm">
              <p>Size:</p>
              <p>{data.size}</p>
            </div>
            <div className="flex space-x-1 opacity-50 text-sm">
              <p>Quantity:</p>
              <p>{`${data.quantity}`}</p>
            </div>
          </div>
          <div className="flex space-x-1 text-sm">
            <p>Seller:</p>
            <p>{data.product[0].brand}</p>
          </div>
          <div>
            <p>Rs. {data.discountedPrice}</p>
          </div>
        </div>
      </div>
      <div >
        <p className="my-10 text-sky-700 font-semibold"><span><StarIcon sx={{fontSize:"1rem"}}/></span> Rate and Review Product</p>
      </div>
    </div>
  );
};

export default OrderDetailCard;
