import React, {useState, useEffect} from "react";

export function CustomHook() {
  const firstName = useInputValue("Maria");
  const lastName = useInputValue("Soni");

  useEffect(() => {
    document.title = `${firstName.value} ${lastName.value}`;
  });

  return (
    <span className="Left">
      <p>Custom hooks</p>
      <input {...firstName}></input>
      <input {...lastName}></input>
    </span>
  );

}

function useInputValue(initialValue) {
  const [value,
    setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {value, onChange: handleChange};
}
