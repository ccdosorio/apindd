var jwt = require("jsonwebtoken");
var User = require("../models/User");
const crypto = require("crypto");

module.exports = function (app) {
  app.post("/api/login", function (req, res) {
    const userData = {
      idusuario: null,
      username: req.body.username,
    };

    User.login(userData).then((results) => {
      if (typeof results !== "undefined" && results.length > 0) {
        let passEncrypt = crypto
          .createHash("md5")
          .update(req.body.password)
          .digest("hex");

        if (passEncrypt == results[0].clave) {
          var temp = {
            idusuario: results[0].idusuario,
            idpersona: results[0].idpersona,
            nombre: results[0].nombre,
            rol: results[0].idrol,
          };

          var token = jwt.sign(temp, "barcelona", {
            expiresIn: "8h",
          });
          var resultado = {
            idusuario: results[0].idusuario,
            nombre: results[0].nombre,
            idpersona: results[0].idpersona,
            rol: results[0].idrol,
            token: token,
          };
          res.json(resultado);
        } else {
          res.json({ mensaje: "Contraseña Incorrecta" });
        }
      } else {
        res.json({
          mensaje: "Usuario Incorrecto",
        });
      }
    });
  });
};
