"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="text-center mt-5">
      <div className="d-flex justify-content-center align-items-center gap-3">
        <h1 className="mb-0">Counter: {count}</h1>
        <div>
          <button onClick={increment} className="btn btn-primary me-2">
            +
          </button>
          <button onClick={decrement} className="btn btn-danger">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
