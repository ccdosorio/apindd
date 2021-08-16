const PautaModel = require("../models/Pauta");
const Services = require("../service");

module.exports = async function (app) {
  app.get(
    "/api/pautas-order/:idorden",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await PautaModel.getAll(req.params.idorden);
        if (typeof results !== "undefined" && results.length > 0) {
          res.status(200).json(results);
        } else {
          res.status(204).json({ msg: "Not Content" });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json(err);
      }
    }
  );
  app.get(
    "/api/pauta-detail/:idpauta",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await PautaModel.getDetail(req.params.idpauta);
        if (typeof results !== "undefined" && results.length > 0) {
          res.status(200).json(results);
        } else {
          res.status(204).json({ msg: "Not Content" });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json(err);
      }
    }
  );
};
