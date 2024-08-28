"use client";
import React from "react";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <ReactLoading type={"balls"} color={"#000"} height={"5%"} width={"5%"} />
    </div>
  );
};

export default Loading;
