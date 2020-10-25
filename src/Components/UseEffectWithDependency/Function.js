import React, {useState, useEffect} from "react";

export function UseEffectFunc() {
  const [name, setName] = useState("");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const ColorCode = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
    setTextColor(ColorCode);
  },[name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <span className="Right">
      <p style={{
        "color": textColor
      }}>Function Component</p>
      <input value={name} onChange={handleChange}></input>
    </span>
  );

}
