import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Grid, Button, Box, TextField } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="lg:px-20 px-5">
      <div>
        <h1 className="font-bold text-xl py-6">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-6">
                <img
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70"
                  alt=""
                  className="w-[8rem] h-[8rem] object-cover object-top"
                />
                <div className="ml-5 space-y-2">
                  <p className="font-semibold">
                    Men Printed Cotton Blend Straight Kurta
                  </p>
                  <p className="space-x-5 opacity-50 text-sm font-semibold">
                    <span>Color : Pink</span>
                    <span>Size : M</span>
                  </p>
                  <p>Seller : FUBAR</p>
                  <p>₹1099</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: "deepPurple[500]" }}>
                <StarBorderIcon
                  sx={{ fontSize: "2rem" }}
                  className="px-2 text-5xl"
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
