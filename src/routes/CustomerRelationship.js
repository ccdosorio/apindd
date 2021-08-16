const CustomerRModel = require("../models/CustomerRelationship");
const Services = require("../service");

module.exports = async function (app) {
  app.get(
    "/api/customers-r/all/:idcliente",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await CustomerRModel.getAll(req.params.idcliente);
        if (typeof results !== "undefined" && results.length > 0) {
          res.status(200).json(results);
        } else {
          res.status(204).json({
            msg: "Not Content",
          });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json(err);
      }
    }
  );
};
