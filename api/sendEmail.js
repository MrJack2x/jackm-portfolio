import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

app.post("/sendEmail", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  const { email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: user,
      subject: subject,
      text: message,
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email" });
  }
});

export default app;
