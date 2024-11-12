import React from "react";

function Header() {
  return (
    <header>
      <h1>
        Plantsy{" "}
        <span className="logo" role="img" aria-label="plant logo">
          🌱
        </span>
      </h1>
      <p className="subtitle">Your one-stop shop for all things green!</p>
    </header>
  );
}

export default Header;
