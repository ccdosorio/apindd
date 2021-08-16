const ExecutiveModel = require("../models/Executive");
const Services = require("../service");


module.exports = async function (app) {
    app.get("/api/executive/sesion/:idusuario",Services.verificar,async (req, res) => {
        try {
          let results = await ExecutiveModel.getAllId(req.params.idusuario);
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

    app.get("/api/executive/all/sesion/", Services.verificar, async (req, res) => {
      try {
        let results = await ExecutiveModel.getAll();
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


    app.get("/api/executive/:idejecutivo", async (req, res) => {
        try {
          let results = await ExecutiveModel.getById(req.params.idejecutivo);
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

 
