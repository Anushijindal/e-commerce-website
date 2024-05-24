import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import DeliveredItems from "../components/Checkout.js/DeliveredItems";
import { useDispatch, useSelector } from "react-redux";
import { orderHistory } from "../../State/Order/Action";
import { getUser } from "../../State/Auth/Action";

const OrderHistoryPage = () => {
  const orderStatus = [
    { label: "On the way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
  ];
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const { order } = useSelector((store) => store);
  console.log(order);
  console.log(auth);
  useEffect(() => {
    dispatch(getUser(jwt));
    dispatch(orderHistory(auth?.user?._id));
  }, [order.history]);
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          <div className="border-2 shadow-md rounded-md mt-4 mx-5 p-5">
            <p className="font-bold  mb-5">Filter</p>
            <div>
              <p className="uppercase font-semibold">Order Status</p>
              {orderStatus.map((item) => (
                <div className="my-1 space-x-2">
                  <input
                    className="h-4 w-4 border-gray-600"
                    type="checkbox"
                    defaultValue={item.value}
                  />
                  <label className="text-gray-600" htmlFor={item.value}>
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={8}>
          {Array.isArray(order?.order) ? (
            order.order.map((items, index) => (
              <DeliveredItems key={index} data={items} />
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </Grid>
        {/*  */}
        {/* <Grid item xs={8}>
          <div>
            {[1, 1, 1, 11, 1, 1, 11, 1].map((item) => (
              <DeliveredItems />
            ))}
          </div>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default OrderHistoryPage;
