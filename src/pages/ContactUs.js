import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "../Compoents/Translation/TranslationContext";
import Button from "../Compoents/Layout/Button";
const ContactUs = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    const url =
      "https://script.google.com/macros/s/AKfycbyEVEFu8NSU2q-ByL0R0gATW-fb05o9tEZRK_TgUWE59INQU-F-_98ACdRJYE1gow0BOQ/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      const data = await response.text();
      alert(data);

      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{t("Contact Us")}</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">{t("Name")}</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{t(errors.name)}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">{t("Email")}</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{t(errors.email)}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">{t("Subject")}</label>
          <input
            type="text"
            className={`form-control ${errors.subject ? "is-invalid" : ""}`}
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <div className="invalid-feedback">{t(errors.subject)}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">{t("Message")}</label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{t(errors.message)}</div>}
        </div>
        <Button disabled={loading} text={loading ? t("Submitting...") : t("Submit")} btn="primary" className="w-100" />
      </form>
    </div>
  );
};

export default ContactUs;
