"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const ProductDetails = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const totalPosts = 20; // Replace this with the total number of products if known

  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productData = await response.json();
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  const handleNavigation = (newId) => {
    if (newId > 0 && newId <= totalPosts) {
      router.push(`/product/${newId}`);
    }
  };

  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid mb-3"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <h1 className="mb-3">{product.title}</h1>
          <p>{product.description}</p>
          <div className="mt-4">
            <button
              onClick={() => handleNavigation(Number(id) - 1)}
              className="btn btn-primary me-2"
              disabled={Number(id) <= 1}
              style={{
                backgroundColor: "#007bff", // Primary color
                borderColor: "#007bff",
                borderRadius: "5px", // Rounded corners
                padding: "10px 20px", // Padding
                fontSize: "16px", // Font size
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Shadow effect
              }}
            >
              Previous
            </button>
            <button
              onClick={() => handleNavigation(Number(id) + 1)}
              className="btn btn-primary"
              disabled={Number(id) >= totalPosts}
              style={{
                backgroundColor: "#28a745", // Secondary color
                borderColor: "#28a745",
                borderRadius: "5px", // Rounded corners
                padding: "10px 20px", // Padding
                fontSize: "16px", // Font size
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Shadow effect
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
