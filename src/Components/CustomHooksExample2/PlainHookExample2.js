import React, {useState, useEffect} from "react";

export function PlainHook() {
  const [firstName,
    setFirstName] = useState("Maria");
  const [lastName,
    setLastName] = useState("Soni");

  useEffect(() => {
    document.title = `${firstName} ${lastName}`;
  });

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <span className="Left">
      <p>In-built hooks</p>
      <input value={firstName} onChange={handleFirstNameChange}></input>
      <input value={lastName} onChange={handleLastNameChange}></input>
    </span>
  );

}
