import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Button from "@mui/material/Button";
import CartItem from '../Cart/CartItem';

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-md border mb-4'>
        <AddressCard />
      </div>
      <div>
      <div className="lg:grid grid-cols-3 relative ">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item)=><CartItem />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] w-full lg:mt-0  mt-3">
          <div className="border rounded-lg  p-3 w-full sm:w-full mt-3">
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
    </div>
  )
}

export default OrderSummary
