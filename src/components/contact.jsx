import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending message...");

  try {
    const response = await fetch(
      "https://zac-portfolio-api.onrender.com/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus(data.message || "Something went wrong.");
    }
  } catch (error) {
    console.error("Contact form error:", error);
    setStatus("Unable to send message.");
  }
};

  return (
    <section className="contact" id="contact">
      <h2>Let's Connect</h2>

      <p>
        Have a project, opportunity, or just want to get in touch?
        Send me a message.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">
          Send Message
        </button>

        {status && <p>{status}</p>}
      </form>

      <div className="contact-links">
        <a href="mailto:omodarazaccheaus@gmail.com">
          <i className="bi bi-envelope-fill"></i>
          Email
        </a>

        <a
          href="https://wa.me/2348140352172"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-whatsapp"></i>
          WhatsApp
        </a>

        <a
          href="https://www.linkedin.com/in/omodara-zaccheaus-3b160a441"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin"></i>
          LinkedIn
        </a>

        <a
          href="https://github.com/omodara-Zac"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github"></i>
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;