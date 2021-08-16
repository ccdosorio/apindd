const Services = require("../service");
const CustomerCalendar = require("../models/CustomerCalendar");

module.exports = async function (app) {
  app.get("/api/customercalendar/sesion/:idusuario", Services.verificar, async (req, res) => {
    try {
      let results = await CustomerCalendar.getAllId(req.params.idusuario);
      if (typeof results !== "undefined" && results.length > 0) {
        res.status(200).json(results);
      } else {
        res.status(204).json({ msg: "Not Content" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  });

  app.get("/api/customercalendar/all/sesion/", Services.verificar, async (req, res) => {
    try {
      let results = await CustomerCalendar.getAll();
      if (typeof results !== "undefined" && results.length > 0) {
        res.status(200).json(results);
      } else {
        res.status(204).json({ msg: "Not Content" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  });

}

