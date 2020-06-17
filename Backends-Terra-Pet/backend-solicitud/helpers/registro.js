//realizar envio de correo para los datos
const nodemailer = require("nodemailer");
const emailC = require("../private/mail.config.json");

function correo(correo, nombre) {
  /* Configuracion correo electronico */
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailC.mail.email,
      pass: emailC.mail.password,
    },
  });

  var mailOptions = {
    from: emailC.mail.email,
    to: correo,
    subject: "Registro",
    text: "Welcome...",
    html:
      "<center> <b>Bienvenid@ " +
      nombre +
      ' a nuestra fantabulosa aplicación.</b><br><br>Gracias por querer ser parte de esta grande familia<br><br><img width="50%" style="margin:auto;text-align:center" src="https://image.ondacero.es/clipping/cmsimages02/2015/11/16/EC2FA6C5-5F69-4265-B000-B16CF14CB951/69.jpg" alt="Imagen..."><br><p>Terrapet en colaboracion con APP LAB LTDA</p><br><p>CopyRigth © 2020, Development Team APP LAB LTDA</p><center><img style="width: 25%" src="https://lh5.googleusercontent.com/vndnnud02RQy7vWaLb-koG1ce20VXoroqDWWTBlcVs3tqZHtx5nFBc5qI6-FsgyqOWwFsetRYA=w1280" alt="AppLab LOGO" /> </center><br> <i>https://sites.google.com/view/applabltda/p%C3%A1gina-principal</i></center>',
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = correo;
