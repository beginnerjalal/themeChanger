import React, { useContext, useEffect, useState } from "react";
import { ThemeContext, type ThemeType } from "../context/ThemeContext";
import "../Styles/Contact.css";

const Contact: React.FC = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: ThemeType;
    setTheme: (t: ThemeType) => void;
  };

  const [cardClassName, setCardClassName] = useState("colorfull-card");

  useEffect(() => {
    setCardClassName(theme === "theme3" ? "colorfull-card" : "");
  }, [theme]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={`contact-page ${theme}`}>
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>
          I’d love to hear from you! Whether it’s a collaboration, feedback, or
          just a hello.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className={cardClassName}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
