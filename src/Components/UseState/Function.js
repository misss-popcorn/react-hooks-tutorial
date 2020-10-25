import React, {useState} from "react";
import "../../App.css";

export default function Function() {
  const [name,
    setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <span className="Right">
      <p>Function Component</p>
      <input value={name} onChange={handleChange}></input>
    </span>
  );
}