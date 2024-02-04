import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const dispatch = useDispatch();
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  return (
    <div>
      <h2>Number of Cake : {numOfCake}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(1))}>Restock Cake</button>
    </div>
  );
};
