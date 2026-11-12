import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };


  const displayhello=()=>{
    alert("hello students");
  };

  return (
    <>
      <h1 style={{ color: "#3b6b8a", textAlign: "center" }}>Counter: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <br></br>
        <button onClick={displayhello} style ={{margin:"10 px auto"}}> click pour dispaly</button>
    </>
  );
};