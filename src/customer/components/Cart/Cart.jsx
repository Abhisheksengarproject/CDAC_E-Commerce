import React from "react";
import CartItem from "./CartItem";
import Button from "@mui/material/Button";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative ">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item)=><CartItem />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-1 lg:mt-0 ">
          <div className="border rounded-lg  p-3 w-full sm:w-full">
            <p className="uppercase font-bold opacity-60">PRICE DETAILS</p>
            <hr />
            <div className="space-y-3 font-semibold mb-4">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹4697</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">₹3419</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-lg text-black font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹1278</span>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full"
              sx={{ px: "2.5rem", py: "0.71rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
