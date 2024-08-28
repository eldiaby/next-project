import React from "react";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog = async () => {
  let posts = [];
  let errorMessage = "";

  try {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
    if (!response.ok) {
      // Handle non-200 responses
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    posts = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    errorMessage = "Error loading posts. Please try again later.";
  }

  return (
    <div className="container mt-5">
      {errorMessage ? (
        <div className="text-center">{errorMessage}</div>
      ) : (
        <div className="row">
          {posts.length === 0 ? (
            <div className="text-center">No posts available.</div>
          ) : (
            posts.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <Card id={item.id} title={item.title} body={item.body} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
