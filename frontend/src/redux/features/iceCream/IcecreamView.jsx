import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);

  return (
    <div>
      <h2>Number of Ice Cream: {numOfIcecream}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order Ice Cream
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(restocked(value));
        }}
      >
        Restock Ice Cream
      </button>
    </div>
  );
};
