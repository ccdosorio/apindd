const ActivityResultModel = require("../models/Activity_result");
const Services = require("../service");


module.exports = async function (app) {
  app.get("/api/activity_result/all", Services.verificar, async (req, res) => {
    try {
      let results = await ActivityResultModel.getAll();
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

  app.get("/api/activity_result/:idactividad_resultado", async (req, res) => {
    try {
      let results = await ActivityResultModel.getById(req.params.idactividad_resultado);
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