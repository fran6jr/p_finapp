import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import cashsuit from "./cashsuit.png"

// https://api.github.com/users/fran6jr

function Header() {
  return (
    <header>
      <h1>CashSuit</h1>
      <img
        src={cashsuit}
        height={200}
        alt="Dollar on a green background"
      />
    </header>
  );
}


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


function Main({ budgetlines, login }) {

  const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

  useEffect(() => {
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((release) => release.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  },
    [login]);

    if(loading) return <p>Loading...</p>
    if(error) return <p>{JSON.stringify(error, null, 2)}</p>

  return (
    <section>
      <p>Your most explored budget line are:</p>
      <ul style={{ textAlign: "left" }}>
        {budgetlines.map((budgetline, i) =>
          <li key={budgetline.id}>
            {budgetline.title}
          </li>)}
      </ul>
      {data ?
        <>
          <p>{JSON.stringify(data)}</p>
          <p>{data.name}</p>
          <p>{data.url}</p>
          <p>{data.blog}</p>
          <img alt={data.login}
            src={data.avatar_url}
            height="200" />
        </>
        : <h1>No user available!</h1>}
    </section>
  );
}

function Footer(props) {
  console.log(props);
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const budgetlines = [
  "Food",
  "Entertainment",
  "Family",
  "Transportation",
  "Bills"
];

const budgetObjects = budgetlines.map((budgetline, i) =>
  ({ id: i, title: budgetline }));

function App() {
  const [authorized, tog] = useReducer((authorized) =>
    !authorized, false);

  return (
    <div className="App">
      <input
        type="checkbox"
        value={authorized}
        onChange={tog}
      />
      {authorized ?
        <>
          <p>Logged in</p>
          <Header />
          <User />
          <Main budgetlines={budgetObjects} login="fran666" />
          <Footer year={new Date().getFullYear()} />
        </>
        : <p>Not logged in. Please Login</p>
      }

    </div>
  );
}

export default App;
