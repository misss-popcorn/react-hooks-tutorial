import React, {useState, useEffect} from "react";

export function PlainHook() {
  const [name,
    setName] = useState("Maria");

  useEffect(() => {
    document.title = name;
  });

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <span className="Left">
      <p>Function Component</p>
      <input value={name} onChange={handleChange}></input>
    </span>
  );

}
