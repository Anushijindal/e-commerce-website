import React, { useEffect } from "react";
import AddressDetails from "./AddressDetails";
import { Button } from "@mui/material";
import CartItem from "../../utilities/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  console.log(order?.order?.orderItems)
  console.log(order)
  console.log(order?.order)
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);
  const handleCheckout=()=>{
    dispatch(createPayment(orderId))
  }
  return (
    <div>
      <div className="border-2 shadow-md p-4 rounded-md">
        <AddressDetails addressData={order?.order?.shippingDetail}/>
      </div>
      <div className="mt-5">
        <div className="lg:grid grid-cols-3 lg:px-16 rounded-lg relative px-2">
          <div className="col-span-2">
            {order?.order?.orderItems?.map((item) => (
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
                  <p>Price ({order?.order?.totalItem} Item)</p>
                  <p className="text-green-600">Rs. {order?.order?.totalPrice}</p>
                </div>
                <div className="flex justify-between mx-4 font-semibold">
                  <p>Discount</p>
                  <p className="text-green-600">-Rs. {order?.order?.discount}</p>
                </div>
                <div className="flex justify-between mx-4 font-semibold">
                  <p>Delivery Charges</p>
                  <p className="text-green-600">Free</p>
                </div>
                <hr />
                <div className="flex justify-between mx-4 font-bold">
                  <p>Total Amount</p>
                  <p className="text-green-600">Rs. {order?.order?.totalDiscountedPrice}</p>
                </div>
              </div>
              <Button
              onClick={handleCheckout}
                className="w-full"
                sx={{
                  bgcolor: "#6A63E8",
                  marginBottom: "10px",
                  width: "350px",
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
    </div>
  );
};

export default OrderSummary;
