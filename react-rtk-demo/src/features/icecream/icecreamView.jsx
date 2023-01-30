import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamComponent = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Icecreams - {numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <button onClick={() => dispatch(restocked(2))}>Restock Icecreams</button>
    </div>
  );
};

export default IcecreamComponent;
