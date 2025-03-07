
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aconsultoriadesaude@gmail.com', // Atualizado para o email correto
      pass: 'gech grza vwld qsvr', // Senha de app
    },
  });

// Rota para enviar e-mails
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'aconsultoriadesaude@gmail.com', // Remetente atualizado
    to: 'aconsultoriadesaude@gmail.com', // Destinatário atualizado
    subject: `Nova mensagem de ${name}`, // Assunto do e-mail
    text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`, // Corpo do e-mail
  };

  // Envia o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erro ao enviar o e-mail.');
    }
    res.status(200).send('E-mail enviado com sucesso!');
  });
});

// Inicia o servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
