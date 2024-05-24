import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import AddressDetails from "../components/Checkout.js/AddressDetails";
import OrderDetailCard from "../components/Checkout.js/OrderDetailCard";
import OrderTracker from "../components/Checkout.js/OrderTracker";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../State/Order/Action";

const OrderDetailPage = () => {
  const { orderId } = useParams();
  const dispatch=useDispatch()
  console.log(orderId)
  const {order}=useSelector(store=>store)
  console.log(order)
  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[])
  const activeStep = order?.order?.OrderStatus === "DELIVERED" ? 4
                 : order?.order?.OrderStatus === "CONFIRMED" ? 2
                 : order?.order?.OrderStatus === "SHIPPED" ? 3
                 : 1;
  return (
    <div className="mx-[15rem]">
      <Grid container>
        <Grid item xs={12} sx={{ boxShadow: 5, p: 3, mb: 3, borderRadius: 2 }}>
        <h1 className="text-xl text-gray-700 font-bold py-2">Delivery Address</h1>
          <AddressDetails sx={{ p: 4 }} addressData={order?.order?.shippingDetail}/>
        </Grid>
        <Grid item xs={12} sx={{py:10}}>
            <OrderTracker activeStep={activeStep}/>
        </Grid>
        <Grid item xs={12}>
          {order?.order?.orderItems?.map((item) => (
            <Box sx={{ boxShadow: 5, p: 1, mb: 3, borderRadius: 2 }}>
              <OrderDetailCard data={item}/>
            </Box>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetailPage;
