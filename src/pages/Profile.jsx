import React, { useContext } from "react";
import { AuthContext } from "../Compoents/Product/AuthContext";
import { Link } from "react-router-dom";
import { useTranslation } from "../Compoents/Translation/TranslationContext";
import Button from "../Compoents/Layout/Button";

const Profile = () => {
  const { t } = useTranslation();
  const { user, logout } = useContext(AuthContext);

  if (!user)
    return (
      <p>
        {t("Please log in")} <Link to="/register">{t("Login")}</Link>
      </p>
    );

  return (
    <div>
      <h2>
        {t("Welcome")}, {user.Name}!
      </h2>
      <div className="border border-dark-subtle w-75 p-5 m-auto">
        <div className="fs-5 fw-bolder">{t("Profile Details")}</div>
        <hr />
        <div className="d-flex flex-column justify-content-between my-3">
          <div className="d-flex flex-row justify-content-between my-2 mx-5">
            <span>{t("Full Name")}</span>
            <span>{user.Name}</span>
          </div>
          <div className="d-flex flex-row justify-content-between my-2 mx-5">
            <span>{t("Mobile Number")}</span>
            <span>{user.Phone}</span>
          </div>
          <div className="d-flex flex-row justify-content-between my-2 mx-5">
            <span>{t("Email ID")}</span>
            <span>{user.Email}</span>
          </div>
          <div className="d-flex flex-row justify-content-between my-2 mx-5">
            <span>{t("City")}</span>
            <span>{user.Addresses[0].City}</span>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link to="/"> <Button btn="danger" text={t("Logout")} onClick={logout} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
