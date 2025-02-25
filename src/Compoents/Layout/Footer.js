import React from "react";
import "./Footer.css";
import { FaAppStore, FaFacebook, FaYoutube, FaInstagram, FaGooglePlay, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "../Translation/TranslationContext";

const Footer = () => {
  const { t } = useTranslation(); // Translation function

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Online Shopping Section */}
        <div className="footer__section">
          <h4>{t("ONLINE")} {t("SHOPPING")}</h4>
          <ul>
            <li>{t("Men")}</li>
            <li>{t("Women")}</li>
            <li>{t("Kids")}</li>
            <li>{t("Home")} & {t("Living")}</li>
            <li>{t("Beauty")}</li>
            <li>{t("Gift")} {t("Cards")}</li>
            <li>{t("Myntra")} {t("Insider")}</li>
          </ul>
        </div>

        {/* Customer Policies Section */}
        <div className="footer__section">
          <h4>{t("CUSTOMER")} {t("POLICIES")}</h4>
          <ul>
            <li>
              <Link className="text-decoration-none text-dark-emphasis" to="/contactus">
                {t("Contact")} {t("Us")}
              </Link>
            </li>
            <li>{t("FAQ")}</li>
            <li>{t("Terms")} & {t("Conditions")}</li>
            <li>{t("Terms")} {t("Of")} {t("Use")}</li>
            <li>{t("Track")} {t("Orders")}</li>
            <li>{t("Shipping")}</li>
            <li>{t("Cancellation")}</li>
            <li>{t("Returns")}</li>
            <li>{t("Privacy")} {t("Policy")}</li>
            <li>{t("Grievance")} {t("Redressal")}</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="footer__section">
          <h4>{t("USEFUL")} {t("LINKS")}</h4>
          <ul>
            <li>{t("Blog")}</li>
            <li>{t("Careers")}</li>
            <li>{t("Site")} {t("Map")}</li>
            <li>{t("Corporate")} {t("Information")}</li>
            <li>{t("Whitehat")}</li>
            <li>{t("Cleartrip")}</li>
          </ul>
        </div>

        {/* Mobile App Section */}
        <div className="footer__section">
          <h4>{t("EXPERIENCE")} {t("SHOPSPHERE")} {t("APP")} {t("ON")} {t("MOBILE")}</h4>
          <div className="footer_apps">
            <FaGooglePlay className="footer_icon" />
            <FaAppStore className="footer_icon" />
          </div>

          {/* Social Media Links */}
          <h4>{t("KEEP")} {t("IN")} {t("TOUCH")}</h4>
          <div className="footer_socials">
            <FaFacebook className="footer_icon" />
            <FaTwitter className="footer_icon" />
            <FaYoutube className="footer_icon" />
            <FaInstagram className="footer_icon" />
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="footer__info">
          <div>
            <h4>{t("100%")} {t("ORIGINAL")}</h4>
            <p>{t("Guaranteed")} {t("for")} {t("all")} {t("products")} {t("at")} {t("ShopSphere.com")}</p>
          </div>
          <div>
            <h4>{t("Return")} {t("within")} {t("14")} {t("days")}</h4>
            <p>{t("of")} {t("receiving")} {t("your")} {t("order")}</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
