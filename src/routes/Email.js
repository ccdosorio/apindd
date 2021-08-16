const nodemailer = require("nodemailer");
module.exports = function (app) {
  app.post("/api/send-mail", (req, res) => {
    output = `<p>hola</p><img src="cid:unique@kreata.ee"/>`;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false,
      auth: {
        user: "christian.osorio@nuestrodiario.com.gt",
        pass: "developerCd30",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const message = {
      from: '"Prueba CRM" <christian.osorio@nuestrodiario.com.gt>',
      to: "christian.osorio@nuestrodiario.com.gt",
      subject: "Prueba CRM API",
      html: output,
      attachments: {
        filename: "PRUEBA.jpg",
        path:
          "C:UsersChristianPicturesalexander-jawfox-tBAsD_VnxCY-unsplash.jpg",
        cid: "unique@kreata.ee",
      },
    };
    transporter.sendMail(message, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(info);
      }
    });
  });
};
