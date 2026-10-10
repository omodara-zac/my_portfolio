const express = require("express");
const cors = require("cors");
const pool = require("./db");
const { Resend } = require("resend");

const app = express();

app.use(cors());
app.use(express.json());

// Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Test backend
app.get("/", (req, res) => {
  res.send("Portfolio backend is running");
});

// Test database connection
app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      message: "Database connected successfully",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database connection failed",
    });
  }
});

// Contact form
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    // 1. Save message to PostgreSQL
    const result = await pool.query(
      `INSERT INTO messages (name, email, message)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, email, message]
    );

    // 2. Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.EMAIL_USER],
      subject: `New Portfolio Message from ${name}`,
      text: `
You received a new message from your portfolio website.

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        message: "Message saved, but email notification failed",
      });
    }

    res.status(201).json({
      message: "Message sent successfully",
      data: result.rows[0],
      emailId: data.id,
    });
  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      message: "Failed to save message",
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});