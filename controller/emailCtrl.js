const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

// Função para validar email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função para validar nome (sem caracteres especiais)
const isValidName = (name) => {
  const nameRegex = /^[a-zA-Z\s]+$/; 
  return nameRegex.test(name);
};

const sendEmail = asyncHandler(async (req, res) => {
  const { email, message, name } = req.body;

  // Validações
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
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, 
      auth: {
        user: process.env.MAIL_ID, 
        pass: process.env.MP,      
      },
    });

    // Enviar o email
    let info = await transporter.sendMail({
      from: `"${name}" <${email}>`, 
      to: process.env.MAIL_ID, 
      subject: "Mensagem de " + name, 
      text: message, 
      html: message, 
      replyTo: email, 
    });

  
    return res.status(200).json({ message: "Email enviado com sucesso!"});
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    return res.status(500).json({ error: "Erro ao enviar o email." });
  }
});

module.exports = sendEmail;
