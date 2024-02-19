import React from "react";
import { Grid } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Rating from "@mui/material/Rating";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Avatar sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}></Avatar>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2 space-x-2">
            <div>
              <p className="font-semibold text-lg ml-3">Ram</p>
              <p className="opacity-70 ml-3">February 17, 2024</p>
            </div>
          </div>
          <Rating className="ml-3" value={4.5} name="half-rating" readOnly precision={0.5}/>
          <p className="ml-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
