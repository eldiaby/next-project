import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import Counter from "../counter/counter";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3">
      <div className="container text-center">
        <h3 className="mb-2">Footer</h3>
        <Counter />
      </div>
    </footer>
  );
};

export default Footer;
