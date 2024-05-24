import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import AddressDetails from "./AddressDetails";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      street: data.get("address"),
      state: data.get("state"),
      city: data.get("city"),
      zipCode: data.get("zip"),
      mobile: data.get("phone"),
    };
    const orderData = { address, navigate };
    console.log({ orderData });
    dispatch(createOrder(orderData));
    console.log("Address", address);
  };
  const handleDeliver = () => {
    // navigate("/checkout?step=3");
  };
  const { auth } = useSelector((store) => store);
  console.log(auth);
  return (
    <div className="py-10">
      <Grid container spacing={2}>
        <Grid
          xs={12}
          lg={4}
          sx={{ boxShadow: 5 }}
          item
          className="border rounded-md shadow-md overflow-y-scroll h-[30.5rem]"
        >
          <div className="py-2 px-5">
            {auth?.user?.address?.map((item) => (
              <AddressDetails addressData={item} />
            ))}
            <Button variant="contained" sx={{ mt: 2, bgcolor: "#9055FB" }}>
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid
          xs={12}
          lg={7}
          sx={{
            ml: 5,
            border: 2,
            borderRadius: 2,
            borderColor: "lightgray",
            boxShadow: 5,
          }}
        >
          <Box sx={{ p: 2 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip/ Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                <Button
                  onClick={handleDeliver}
                  type="submit"
                  variant="contained"
                  sx={{ mt: 5, ml: 40, px: 5, py: 1, bgcolor: "#9055FB" }}
                >
                  Deliver Here
                </Button>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
