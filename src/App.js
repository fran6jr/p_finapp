import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Header from "./components/Header";
import User from './components/User';
import Main from './components/Main';
import Footer from './components/Footer';

// https://api.github.com/users/fran6jr

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
          <Main login="fran6jr" />
          <Footer year={new Date().getFullYear()} />
        </>
        : <p>Not logged in. Please Login</p>
      }

    </div>
  );
}

export default App;
