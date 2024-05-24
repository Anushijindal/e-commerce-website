import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../State/Cart/Action";
const CartItem = ({ item }) => {
  console.log("cartItem", item);
  const dispatch = useDispatch();
  const handleUpdateCart = (num) => {
    const data = {
      data: { quantity: item?.quantity + num },
      cartItemId: item?._id,
    };
    console.log(data);
    dispatch(updateCartItem(data));
  };
  const handleRemoveItem = () => {
    // const data={cartItemId:item?._id}
    // console.log(data)
    dispatch(removeCartItem(item._id));
  };
  return (
    <div className="p-5 border rounded-md shadow-lg m-5">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            alt=""
            className="w-full h-full object-cover object-top"
            src={Array.isArray(item?.product)? item.product[0]?.imgURL: item.product?.imgURL}
          />
        </div>
        <div className="space-y-1 ml-5">
          <p className="font-bold">{Array.isArray(item?.product)? item.product[0]?.title: item.product?.title}</p>
          <p className="font-semibold opacity-50 text-sm">
            {Array.isArray(item?.product)? item.product[0]?.brand: item.product?.brand}
          </p>
          <p className="text-sm">
            {" "}
            size: {item?.size} {Array.isArray(item?.product)? item.product[0]?.color: item.product?.color}
          </p>
          <div className="flex flex-row space-x-2 pt-9">
            <p className="text-sm font-bold tracking-tight text-gray-900 mt-3">
              Rs. {Array.isArray(item?.product)? item.product[0]?.discountedPrice: item.product?.discountedPrice}
            </p>
            <p className="line-through opacity-50 text-sm mt-3">
              Rs. {Array.isArray(item?.product)? item.product[0]?.price: item.product?.price}
            </p>
            <p className="font-semibold text-green-800 text-sm mt-3">
              {Array.isArray(item?.product)? item.product[0]?.discountPresent: item.product?.discountPresent}% off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            sx={{ color: "#4F46E5" }}
            onClick={() => handleUpdateCart(-1)}
            disabled={item?.quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-md">{item?.quantity}</span>
          <IconButton
            sx={{ color: "#4F46E5" }}
            onClick={() => handleUpdateCart(1)}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button onClick={handleRemoveItem}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
