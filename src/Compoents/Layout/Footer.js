import React from "react";
import { FaAppStore, FaFacebook, FaYoutube, FaInstagram, FaGooglePlay, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "../Translation/TranslationContext";

const Footer = () => {
  const { t } = useTranslation(); 

  const footerSections = [
    {
      title: `${t("ONLINE")} ${t("SHOPPING")}`,
      links: [
        <Link className="text-decoration-none text-dark" to="/categorypage/Mobiles">{t("Mobiles")}</Link>,
        <Link className="text-decoration-none text-dark" to="/categorypage/Electronics">{t("Electronics")}</Link>,
        <Link className="text-decoration-none text-dark" to="/categorypage/Sportswear">{t("Sportswear")}</Link>,
        <Link className="text-decoration-none text-dark" to="/categorypage/Home Appliances">{`${t("Home")} ${t("Appliances")}`}</Link>, 
        <Link className="text-decoration-none text-dark" to="/categorypage/Clothing">{t("Clothing")}</Link>
        ],
    },
    {
      title: `${t("CUSTOMER")} ${t("POLICIES")}`,
      links: [
        <Link className="text-decoration-none text-dark" to="/contactus">{`${t("Contact")} ${t("Us")}`}</Link>,
        t("FAQ"),
        `${t("Terms")} & ${t("Conditions")}`,
        `${t("Terms")} ${t("Of")} ${t("Use")}`,
        `${t("Track")} ${t("Orders")}`,
        t("Shipping"),
        t("Cancellation"),
        t("Returns"),
        `${t("Privacy")} ${t("Policy")}`,
        `${t("Grievance")} ${t("Redressal")}`,
      ],
    },
    {
      title: `${t("USEFUL")} ${t("LINKS")}`,
      links: [t("Blog"), t("Careers"), `${t("Site")} ${t("Map")}`, `${t("Corporate")} ${t("Information")}`, t("Whitehat"), t("Cleartrip")],
    },
  ];

  // Social Media Icons
  const socialIcons = [
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaYoutube/>, link: "#" },
    { icon: <FaInstagram  />, link: "#" },
  ];

  return (
    <footer className="bg-white text-dark py-4">
      <div className="container">
        <div className="row g-4">
          {footerSections.map((section, index) => (
            <div key={index} className="col-12 col-md-3">
              <h5>{section.title}</h5>
              <ul className="list-unstyled">
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-12 col-md-3 text-center text-md-start">
            <h5>{t("EXPERIENCE")} {t("SHOPSPHERE")} {t("APP")} {t("ON")} {t("MOBILE")}</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start my-2">
              <FaGooglePlay className="text-dark" />
              <FaAppStore className="text-dark" />
            </div>

            <h5>{t("KEEP")} {t("IN")} {t("TOUCH")}</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start my-2">
              {socialIcons.map((item, i) => (
                <a key={i} href={item.link} className="text-dark">{item.icon}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h6>{t("100%")} {t("ORIGINAL")}</h6>
            <p className="small">{t("Guaranteed")} {t("for")} {t("all")} {t("products")} {t("at")} {t("ShopSphere.com")}</p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-start">
            <h6>{t("Return")} {t("within")} {t("14")} {t("days")}</h6>
            <p className="small">{t("of")} {t("receiving")} {t("your")} {t("order")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
