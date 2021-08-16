const CustomerModel = require("../models/Customer");
const Services = require("../service");

module.exports = async function (app) {
  app.get(
    "/api/customers/all/:idusuario/:no_pagina/:paginas",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await CustomerModel.getAll(req.params.idusuario, req.params.no_pagina, req.params.paginas);
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

  app.get("/api/clients-count/:idusuario", Services.verificar, async (req, res) => {
    try {
      let results = await CustomerModel.getQuantity(req.params.idusuario);
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


  app.get("/api/customers-manager/all/:no_pagina/:paginas", Services.verificar, async (req, res) => {
    try {
      let results = await CustomerModel.getAllManager(req.params.no_pagina, req.params.paginas);
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

  app.get("/api/customer-count/", async (req, res) => {
    try {
      let results = await CustomerModel.getQuantityOfRecords();
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

  app.get("/api/data-customer/", async (req, res) => {
    try {
      let results = await CustomerModel.getDataFilters();
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

  app.get("/api/customer/:idcliente", async (req, res) => {
    try {
      let results = await CustomerModel.getById(req.params.idcliente);
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

  app.post("/api/customer-post", Services.verificar, async (req, res) => {
    // console.log(req.body);
    const customersData = {
      genero: req.body.genero,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      direccion: req.body.direccion,
      telefonos: req.body.telefonos,
      tipo_persona: req.body.tipo_persona,
      nit: req.body.nit,
      correo: req.body.correo,
      fecha_nacimiento: req.body.fecha_nacimiento,
      idgeo_departamento: req.body.idgeo_departamento,
      idgeo_municipio: req.body.idgeo_municipio,
      zona: req.body.zona,
      idejecutivo: req.body.idejecutivo,
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
      tipo_ingreso: req.body.tipo_ingreso,
      telefono_contacto: req.body.telefono_contacto,
      correo_contacto: req.body.correo_contacto,
      idcontacto_tipo: req.body.idcontacto_tipo,
      nombre_contacto: req.body.nombre_contacto,
    };

    try {
      let results = await CustomerModel.createCustomer(customersData);
      if (typeof results !== "undefined" && results.lenght > 0) {
        res.status(200).json(results);
      } else {
        res.status(200).json({ msg: "Prospecto creado" });
      }
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  app.put("/customer-put/:idcliente", async (req, res) => {
    const customersData = {
      idcliente: req.params.idcliente,
      nit: req.body.Nit,
      nombre: req.body.Nombre,
      direccion: req.body.Direccion,
      correo: req.body.Correo,
      telefono: req.body.Telefono,
    };

    try {
      let results = await CustomerModel.updateCustomer(customersData);
      if (typeof results !== "undefined" && results.lenght > 0) {
        res.status(200).json(results);
      } else {
        res.status(200).json({ msg: "Client updated successfully!" });
      }
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  app.put("/customer-delete/:idcliente", async (req, res) => {
    try {
      let results = await CustomerModel.deleteCustomer(req.params.idcliente);
      if (typeof results !== "undefined" && results.lenght > 0) {
        res.status(200).json(results);
      } else {
        res.status(200).json({ msg: "Client removed successfully!" });
      }
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  });
};
