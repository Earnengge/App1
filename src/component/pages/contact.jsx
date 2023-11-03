import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="register-container">
      <h2 className="register-heading">Register for Launchpad Early  Access</h2>
      <form className="register-form" action="#" method="POST">
      <div className="row">
        <div className="form-group">
          <label htmlFor="twitter">Twitter Handle</label>
          <input type="text" id="twitter" name="twitter" placeholder="Your Twitter Handle" />
        </div>
       
        <div className="form-group">
          <label htmlFor="telegram">Telegram</label>
          <input type="text" id="telegram" name="telegram" placeholder="Your Telegram Username" />
        </div>
        </div>
        <div className="row">
        <div className="form-group">
          <label htmlFor="ethAddress">Binance Smartchain Address</label>
          <input type="text" id="ethAddress" name="ethAddress" placeholder="Your Eth Address" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message for Us</label>
          <input type="text" id="message" name="message" placeholder="Your message"></input>
        </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
