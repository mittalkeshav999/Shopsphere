import React from "react";
import "./Footer.css";
import { FaAppStore,FaFacebook,FaYoutube,FaInstagram,FaGooglePlay, FaTwitter } from "react-icons/fa";





const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Online Shopping Section */}
        <div className="footer__section">
          <h4>ONLINE SHOPPING</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
        </div>

        {/* Customer Policies Section */}
        <div className="footer__section">
          <h4>CUSTOMER POLICIES</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Grievance Redressal</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="footer__section">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
            <li>Whitehat</li>
            <li>Cleartrip</li>
          </ul>
        </div>

        {/* Mobile App Section */}
        <div className="footer__section">
          <h4>EXPERIENCE SHOPSPHERE APP ON MOBILE</h4>
          <div className="footer_apps">
       
          <FaGooglePlay />
          <FaAppStore />

            
          </div>
          <h4>KEEP IN TOUCH</h4>
          <div className="footer_socials">
          <FaFacebook />
          <FaTwitter/>
          <FaYoutube/>
          <FaInstagram/>  
          </div>
        </div>

        {/* Additional Info */}
        <div className="footer__info">
          <div>
            <h4>100% ORIGINAL</h4>
            <p>guarantee for all products at shopsphere.com</p>
          </div>
          <div>
            <h4>Return within 14 days</h4>
            <p>of receiving your order</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
