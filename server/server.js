const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); 

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ctorpocorivera@gmail.com', // Reemplaza con tu dirección de correo
    pass: 'tucontraseña', // Reemplaza con tu contraseña
  },
});

app.post('/enviar-email', (req, res) => {
  const { name, email, query } = req.body;

  const mailOptions = {
    from: 'tucorreo@gmail.com',
    to: 'tucorreo@gmail.com', // Reemplaza con tu dirección de correo
    subject: 'Datos del formulario',
    text: `Nombre: ${name}\nCorreo Electrónico: ${email}\nConsulta: ${query}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.send('Correo enviado con éxito');
    }
  });
});

app.listen(3001, () => {
  console.log('Servidor en funcionamiento en el puerto 3001');
});
