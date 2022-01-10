import React, {useState, useEffect, useReducer} from "react";


function User() {
    const [name, setName] = useState("Franc");
  
    useEffect(() => {
      console.log(`your name is ${name}.`);
    }, [name]);
  
    const [checked, toggle] = useReducer(
      (checked) => !checked,
      false
    );
  
    return (
      <>
        <header>
          <h2>Welcome {name},</h2>
        </header>
        <input
          type="checkbox"
          value={checked}
          onChange={toggle}
        />
        <p>{checked ? "checked" : "not checked"}</p>
        <button onClick={() =>
          setName("Franc")
        }>
          Franc
        </button>
        <button onClick={() =>
          setName("Sylvia")
        }>
          Sylvia
        </button>
        <button onClick={() =>
          setName("Sylvester")
        }>
          Sylvester
        </button>
        <button onClick={() =>
          setName("John")
        }>
          John
        </button>
        <button onClick={() =>
          setName("Chidera")
        }>
          Chidera
        </button>
      </>
  
    );
  }

  export default User;