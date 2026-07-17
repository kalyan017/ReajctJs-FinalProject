import React from 'react'

import { useState, useRef,useEffect } from "react";
import "../styles/Contact.css";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);

  useEffect(() => {

    nameRef.current.focus();

  }, []);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const validate = () => {

    let newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setErrors({});
      nameRef.current.focus();

    }

  };

  return (

    <div className="contact-page">

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <h1>Contact Us</h1>

        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        {errors.phone && <p className="error">{errors.phone}</p>}

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        {errors.subject && <p className="error">{errors.subject}</p>}

        <textarea
          rows="5"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />

        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>

  );

}