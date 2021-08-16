const ProspectsModel = require("../models/Prospects");
const Services = require("../service");

module.exports = async function (app) {
  app.get(
    "/api/prospects/all/:idusuario",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await ProspectsModel.getAll(req.params.idusuario);
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

  app.get("/api/prospects-manager/all/:no_pagina/:paginas", Services.verificar, async (req, res) => {
    try {
      let results = await ProspectsModel.getAllManager(req.params.no_pagina, req.params.paginas);
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

  app.get("/api/prospect-count/", async (req, res) => {
    try {
      let results = await ProspectsModel.getQuantityOfRecords();
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

  app.get("/api/prospect/:idcliente", Services.verificar, async (req, res) => {
    try {
      let results = await ProspectsModel.getById(req.params.idcliente);
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

  app.get("/api/data-prospect/", async (req, res) => {
    try {
      let results = await ProspectsModel.getDataFilters();
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

  app.put(
    "/api/prospect-put/:idcliente",
    Services.verificar,
    async (req, res) => {
      const prospectData = {
        idcliente: req.params.idcliente,
        nit: req.body.nit,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        correo: req.body.correo,
        telefono: req.body.telefono,
        estatus: req.body.estatus,
        idgeo_departamento: req.body.idgeo_departamento,
        idgeo_municipio: req.body.idgeo_municipio,
        zona: req.body.zona,
        nombre_comercial: req.body.nombre_comercial,
        referencia_ubicacion: req.body.referencia_ubicacion,
        celular: req.body.celular,
        idforma_pago: req.body.idforma_pago,
        idcliente_tipo: req.body.idcliente_tipo,
        direccion_facturacion: req.body.direccion_facturacion,
        direccion_pago: req.body.direccion_pago,
        nombre_factura: req.body.nombre_factura,
        nit_factura: req.body.nit_factura,
        fecha_factura: req.body.fecha_factura,
        fecha_pago: req.body.fecha_pago,
        exento_iva: req.body.exento_iva,
        exento_timbre: req.body.exento_timbre,
        agente_retenedor: req.body.agente_retenedor,
        cuenta_banco: req.body.cuenta_banco,
        idbanco: req.body.idbanco,
        idtipo_cuenta: req.body.idtipo_cuenta,
        tipo_ingreso: req.body.tipo_ingreso
      };

      try {
        let results = await ProspectsModel.updateProspect(prospectData);
        if (typeof results !== "undefined" && results.lenght > 0) {
          res.status(200).json(results);
        } else {
          res.status(200).json({ msg: "Prospecto actualizado" });
        }
      } catch (error) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  );

  app.get("/api/departments/all/", Services.verificar, async (req, res) => {
    try {
      let results = await ProspectsModel.getAllDepartments();
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

  app.get("/api/municipalities/all/", Services.verificar, async (req, res) => {
    try {
      let results = await ProspectsModel.getAllMunicipalities();
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
