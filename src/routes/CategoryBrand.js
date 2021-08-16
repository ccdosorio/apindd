const CategoryModel = require("../models/CategoryBrand");
const Services = require("../service");

module.exports = async function (app) {
  app.get(
    "/api/categories-brands/:idcliente/:no_pagina/:paginas",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await CategoryModel.getAll(
          req.params.idcliente,
          req.params.no_pagina,
          req.params.paginas
        );
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

  app.get(
    "/api/categories-count/:idcliente",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await CategoryModel.getQuantity(req.params.idcliente);
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

  app.post("/api/category-post", Services.verificar, async (req, res) => {
    const categoryData = {
      idcliente: req.body.idcliente,
      idcategoria: req.body.idcategoria,
      nombre: req.body.nombre,
    };
    try {
      let results = await CategoryModel.create(categoryData);
      if (typeof results !== "undefined" && results.lenght > 0) {
        res.status(200).json(results);
      } else {
        res.status(200).json({ msg: "Categoría creada con éxito!" });
      }
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  app.put(
    "/api/category-put/:idcliente_marca",
    Services.verificar,
    async (req, res) => {
      const categoryData = {
        idcliente_marca: req.params.idcliente_marca,
        idcliente: req.body.idcliente,
        idcategoria: req.body.idcategoria,
        nombre: req.body.nombre,
      };

      try {
        let results = await CategoryModel.update(categoryData);
        if (typeof results !== "undefined" && results.lenght > 0) {
          res.status(200).json(results);
        } else {
          res.status(200).json({ msg: "¡Categoría editada con éxito!" });
        }
      } catch (error) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  );

  app.put(
    "/api/category-delete/:idcategoria",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await CategoryModel.inactivate(req.params.idcategoria);
        if (typeof results !== "undefined" && results.lenght > 0) {
          res.status(200).json(results);
        } else {
          res.status(200).json({ msg: "¡Categoría eliminada con éxito!" });
        }
      } catch (error) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  );

  app.get("/api/categories/all/", Services.verificar, async (req, res) => {
    try {
      let results = await CategoryModel.getCategories();
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
  });
};
