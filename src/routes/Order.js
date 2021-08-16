const OrderModel = require("../models/Order");
const Services = require("../service");

module.exports = async function (app) {
  app.get(
    "/api/orders-customer/:idcliente/:idusuario",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await OrderModel.getAll(
          req.params.idcliente,
          req.params.idusuario
        );
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
    "/api/order-detail/:idorden",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await OrderModel.getDetail(req.params.idorden);
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
