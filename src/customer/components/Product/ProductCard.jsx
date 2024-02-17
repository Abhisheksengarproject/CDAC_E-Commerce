import React from "react";
import "./ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className="productCard w-[15rem] m-3 translate-all cursor-pointer rounded-lg">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src= {product.imageUrl}
          alt=""
        />
      </div>
      <div className="textpart bg-whote p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="font-semibold flex items-center space-x-2">
          <p className="font-semibold">&#8377;{product.discountedPrice}</p>
          <p className="line-through opacity-50">&#8377;{product.price}</p>
          <p className="text-green-600 font-semibold">&#8377;{product.discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
