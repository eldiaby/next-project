import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-primary text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3">Next.js Project</h1>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
