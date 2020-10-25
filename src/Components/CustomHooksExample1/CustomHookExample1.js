import React, {useState, useEffect} from "react";
import "../../App.css";

export function CustomHook() {
  const [name,
    setName] = useState("Maria");
  useDocumentTitle(name);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <span className="Right">
      <p>Custom Hooks</p>
      <input value={name} onChange={handleChange}></input>
    </span>
  );

}

function useDocumentTitle(name) {
  useEffect(() => {
    document.title = name;
  });
}