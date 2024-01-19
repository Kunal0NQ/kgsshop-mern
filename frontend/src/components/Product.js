import React from "react";
import { Link, Outlet } from "react-router-dom";
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    // <Link to={`/product/${product.id}`} relative="path">
    <Link to="/" relative="path">
      <div className="bg-white shadow rounded overflow-hidden group">
        <div className="relative">
          <img
            src={process.env.PUBLIC_URL + "images/products/product1.jpg"}
            alt="product 1"
            className="w-full"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
        justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              name="view product"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              name="add to wishlist"
            >
              <i className="fa-solid fa-heart"></i>
            </a>
          </div>
        </div>

        <div className="pt-4 pb-3 px-4">
          <a href="#">
            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
              {product.name}
            </h4>
          </a>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-semibold">
              ${product.price}
            </p>
            <p className="text-sm text-gray-400 line-through">$55.90</p>
          </div>
          {/* Rating */}
          <Rating />
       
        </div>

        <button className="block w-full py-1 text-center text-white bg-primary bg-[#fd3d57] border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default Product;
