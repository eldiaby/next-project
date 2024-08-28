import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">Welcome to the Contact Page</h1>
        <p className="lead">
          If you have any questions or feedback, please reach out to us using
          the form below.
        </p>
        <form className="mt-4">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
