import React, {useState, useEffect} from "react";

export function UseEffectFunc() {
  const [count,
    setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <span className="Right">
      <p>Function Component</p>
      <p>{count}</p>
    </span>
  );

}