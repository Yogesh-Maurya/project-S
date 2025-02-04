import React from "react";
import "./ContactPage.css"; // Create this CSS file for styling

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Get in Touch</h1>
      <p> We are here to help you.</p>
      <form className="contact-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Please enter first name..."
            required
          />
          <input type="text" placeholder="Please enter last name..." required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Please enter email..." required />
          <input
            type="tel"
            placeholder="Please enter phone number..."
            required
          />
        </div>
        <textarea placeholder="Please enter query..." required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
