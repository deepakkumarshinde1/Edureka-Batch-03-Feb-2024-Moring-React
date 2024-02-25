import { memo } from "react";
import { getParams } from "./hoc/getParams";

const DecComponent = (props) => {
  let { decCount, decCountFun } = props;
  console.log("decComponent is rendered");
  return (
    <>
      <h1>{decCount}</h1>
      <button onClick={decCountFun}>Dec</button>
    </>
  );
};

export default memo(getParams(DecComponent));
