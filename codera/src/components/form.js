import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <input type="text" placeholder="Your Name"></input>
        <input type="email" placeholder="Your Email"></input>
        <input type="text" placeholder="Subject"></input>
        <textarea rows="6" placeholder="Type your message..." />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
