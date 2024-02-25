import { memo } from "react";

let Child = ({ text }) => {
  console.log("Child component rendered");
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export default memo(Child);
// component to pure component --> memo --> HOC
