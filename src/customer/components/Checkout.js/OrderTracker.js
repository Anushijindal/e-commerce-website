import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const OrderTracker = ({ activeStep }) => {
  const steps = [
    { name: "Placed", value: 2, id: "PLACED" },
    { name: "Order Confirmed", value: 3, id: "CONFIRMED" },
    { name: "Shipped", value: 4, id: "SHIPPED" },
    // "Out for Delivery",
    { name: "Delivered", value: 4, id: "DELIVERED" },
  ];
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel>{label.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
