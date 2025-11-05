"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", topic: "", honeypot: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");

  const inputClass = "w-full p-6 mb-2 text-xl text-black border-4 border-black rounded-full placeholder-gray";
  const textareaClass = "w-full p-6 mb-2 text-xl text-black border-4 border-black rounded-xl placeholder-gray";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.topic) newErrors.topic = "Please select a topic.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setSendError("");
    const validationErrors = validate();

    if (formData.honeypot) return; // spam bot trap
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const res = await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "", topic: "", honeypot: "" });
          setErrors({});
        } else {
          const { error } = await res.json();
          setSendError(error || "Something went wrong. Please try again later.");
        }
      } catch (error) {
        console.error(error);
        setSendError("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div id="contact" className="pb-20">
      <h2 className="text-[19.211vw] md:text-[8.611vw] tracking-tight text-center font-display leading-tight mb-4">
        Questions?
      </h2>
      <div className="mb-12 text-2xl text-center">You know the drill</div>

      {submitted && <p className="text-green-600 text-center">✅ Email sent successfully!</p>}
      {sendError && <p className="text-red-600 text-center">{sendError}</p>}

      <form onSubmit={handleSubmit} className="w-full px-6 md:px-0 md:w-[34.7%] mx-auto">
        <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" autoComplete="off" />

        <div role="group">
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className={inputClass} />
          {errors.name && <span className="text-red-600">{errors.name}</span>}
        </div>

        <div role="group">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={inputClass} />
          {errors.email && <span className="text-red-600">{errors.email}</span>}
        </div>

        <div role="group">
          <select name="topic" value={formData.topic} onChange={handleChange} className={inputClass}>
            <option value="">Select a Topic</option>
            <option value="New Business">New Business</option>
            <option value="Careers">Careers</option>
            <option value="Press">Press</option>
            <option value="Speaking">Speaking</option>
          </select>
          {errors.topic && <span className="text-red-600">{errors.topic}</span>}
        </div>

        <div role="group">
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className={textareaClass} />
          {errors.message && <span className="text-red-600">{errors.message}</span>}
        </div>

        <button type="submit" disabled={loading} className={`block w-full py-4 text-center text-white border-4 border-black rounded-full transition-colors ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-white hover:text-black"}`}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
