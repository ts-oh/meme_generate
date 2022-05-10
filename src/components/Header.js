import React from "react";
import logo from "../image/logo.jpeg";

export default function Header() {
  return (
    <header className="header">
      <img alt="logo" src={logo} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Learning - practice project</h4>
    </header>
  );
}
