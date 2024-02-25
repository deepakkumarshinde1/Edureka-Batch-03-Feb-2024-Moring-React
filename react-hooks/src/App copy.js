import { useState, useCallback, useMemo } from "react";
import Child from "./components/Child";
import DecComponent from "./components/DecCounter";

const App = () => {
  let [count, setCount] = useState(0);
  let [decCount, setDecCount] = useState(100);

  let incCount = () => {
    setCount(count + 1);
  };

  let decCountFun = useCallback(() => {
    setDecCount(decCount - 1);
  }, [decCount]);

  let checkElement = useMemo(() => {
    console.log("function runs");
    if (count % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }, [count]);
  // cache a function ==> we can use a useCallback to cache a function
  // cache a variable ==> we can use a useMemo to cache a variable

  console.log("App component rendered");
  return (
    <>
      <center>
        <Child text={"Counter System"} />
        <h1>{count}</h1>
        <button onClick={incCount}>Inc</button>

        {checkElement === true ? "Number is div by 5" : null}
        <hr />

        <DecComponent decCount={decCount} decCountFun={decCountFun} />
      </center>
    </>
  );
};

export default App;
