import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeComponent = () => {
  const numOfCake = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes - {numOfCake} </h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
};

export default CakeComponent;
