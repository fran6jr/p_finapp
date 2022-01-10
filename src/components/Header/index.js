import React from 'react';
import cashsuit from "../../assets/cashsuit.png"

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

export default Header;
