const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");
const ContactMessage = require("../models/contactMessage");

// Validações
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidName = (name) => /^[a-zA-Z\s]+$/.test(name);

const sendEmail = asyncHandler(async (req, res) => {
  const { email, message, name } = req.body;

  if (!email || !message || !name) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Email inválido." });
  }

  if (!isValidName(name)) {
    return res.status(400).json({ error: "Nome inválido. Não use caracteres especiais." });
  }

  try {
    // 🔽 SALVA NO BANCO (MySQL)
    await ContactMessage.create({ name, email, message });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MP,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_ID,
      subject: "Mensagem de " + name,
      text: message,
      html: message,
      replyTo: email,
    });

    return res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    return res.status(500).json({ error: "Erro ao enviar o email." });
  }
});

module.exports = sendEmail;
