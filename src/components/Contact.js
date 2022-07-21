import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact-container">
      <div className="contact-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p id="nav-logo">TEMPUS™</p>
        </Link>
        <h1>
          {" "}
          We are nothing without you. Please dont hesitate to get in touch with
          us.
        </h1>
      </div>
      <div className="contact-right">
        <p>
          All inquiries are usually handled by our highly proffessional customer
          service team at{" "}
          <span className="contact-email-span">
            customer-support@tempus.com
          </span>{" "}
          within 1-2 business days.
        </p>
        <input
          id="contact-name"
          className="input"
          type="text"
          placeholder="Enter your name"
        ></input>
        <input
          id="contact-email"
          className="input"
          type="text"
          placeholder="Enter your email address"
        ></input>
        <textarea
          id="contact-inquiry"
          className="text-area"
          placeholder="Enter your inquiry"
        ></textarea>
        <button
          onClick={() => {
            if (
              document.getElementById("contact-name").value.length > 0 &&
              document.getElementById("contact-email").value.length > 0 &&
              document.getElementById("contact-inquiry").value.length > 0
            ) {
              alert(
                "Thank you for your email, we will get back to you as soon as possible."
              );
              document.getElementById("contact-name").value = "";
              document.getElementById("contact-email").value = "";
              document.getElementById("contact-inquiry").value = "";
            } else {
              alert("Please fill in all the boxes below before submitting.");
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
