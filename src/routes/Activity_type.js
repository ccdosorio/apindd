const Activity_typeModels = require("../models/Activity_type");
const Services = require("../service");


module.exports = async function (app) {
  app.get("/api/activity_type/all", Services.verificar, async (req, res) => {
    try {
      let results = await Activity_typeModels.getAll();
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

  app.get("/api/activity_type/:idactividad_tipo", async (req, res) => {
    try {
      let results = await Activity_typeModels.getById(req.params.idactividad_tipo);
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