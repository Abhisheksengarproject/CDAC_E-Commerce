import React from "react";
import { Grid, Button, Box, TextField } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";

const OrderCard = () => {
  return (
    <div className="p-5 mr-3 rounded-md shadow-md hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70"
              alt=""
              className="w-[5rem] h-[5rem] object-cover object-top"
            />
            <div className="ml-5 space-y-2">
              <p>Men Printed Cotton Blend Straight Kurta</p>
              <p className="opacity-50 text-xs font-semibold">Size : M</p>
              <p className="opacity-50 text-xs font-semibold">Color : Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹1499</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on March 3</span>
              </p>
              <p className="text-xs">Your item has been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Excpected Delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
