var jwt = require("jsonwebtoken");
const crypto = require("crypto");
var services = {};

services.verificar = function (req, res, next) {
  var token = services.getToken(req, res);
  jwt.verify(token, "barcelona", function (err, decoded) {
    if (err) {
      res.json({
        success: false,
        mensaje: "Error en el token",
        error: err,
      });
    } else {
      req.token = token;
      req.usuario = decoded;
      next();
    }
  });
};
services.getToken = function (req, res) {
  var header = req.headers.authorization;
  if (typeof header != "undefined") {
    var headerArray = header.split(" ");
    //var token = headerArray[1];
    var token = headerArray.pop();
    // console.log(token);

    if (token) {
      return token;
    } else {
      res.json({
        estado: false,
        mensaje: "No existe el token",
      });
    }
  } else {
    res.json({
      estado: false,
      mensaje: "No Existe la cabecera Authorization",
    });
    return;
  }
};

module.exports = services;
