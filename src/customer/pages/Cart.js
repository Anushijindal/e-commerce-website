import React, { useEffect } from "react";
import CartItem from "../utilities/CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((store) => store);
  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCart())
  },[cart.deleteCartItem,cart.updateCart,cart.get])
  
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 rounded-lg relative px-2">
        <div className="col-span-2">
          {cart?.cart?.cartItems?.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="col-span-1 sticky px-5 h-[100vh] mt-5 ">
          <div className="border rounded-lg shadow-lg">
            <p className="uppercase font-semibold opacity-60 py-3 text-center">
              Price Details
            </p>
            <div className="space-y-3 pt-5 mb-10">
              <div className="flex justify-between mx-4 font-semibold">
                <p>Total Price ({cart?.cart?.totalItem} Item)</p>
                <p className="text-green-600">Rs. {cart?.cart?.totalPrice}</p>
              </div>
              <div className="flex justify-between mx-4 font-semibold">
                <p>Discount</p>
                <p className="text-green-600">-Rs. {cart?.cart?.discount}</p>
              </div>
              <div className="flex justify-between mx-4 font-semibold">
                <p>Delivery Charges</p>
                <p className="text-green-600">Free</p>
              </div>
              <hr />
              <div className="flex justify-between mx-4 font-bold">
                <p>Total Amount</p>
                <p className="text-green-600">Rs. {cart?.cart?.totalDiscountedPrice}</p>
              </div>
            </div>
            <Button
              onClick={handleCheckOut}
              className="w-full"
              sx={{
                bgcolor: "#6A63E8",
                marginBottom: "10px",
                width: "400px",
                ml: "10px",
              }}
              variant="contained"
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
