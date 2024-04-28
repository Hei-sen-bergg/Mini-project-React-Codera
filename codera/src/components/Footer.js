import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaSearchLocation
            size={25}
            style={{ color: "#fff", marginRight: "2rem" }} />
        
        <div>
          <p>1234 Elm Street,</p>
          <h4>Springfield, IL 62701, USA.</h4>
        </div>
        </div>
        <div className="phone">
          <h4>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            1-800-123-456
          </h4>
        </div>
        <div className="email">
          <h4>
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            connect@codera.com
          </h4>
        </div>
      </div>

    <div className="right">
        <h4> About the company</h4>
        <p>Codera is a company with a vision to empower individuals worldwide with the essential skills needed to thrive in the digital era. 
            Our mission is to make coding education accessible, engaging, and impactful.</p>
    <div className="social">
        <FaFacebook size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
        <FaLinkedin size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
        <FaTwitter size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

    </div>
    </div>


    </div>
    </div>
  );
};

export default Footer;
