const ContactModel = require("../models/Contact");
const Services = require("../service");

module.exports = async function (app) {
  app.get(
    "/api/contacts/:idcliente/:no_pagina/:paginas",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await ContactModel.getContactsById(
          req.params.idcliente,
          req.params.no_pagina,
          req.params.paginas
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
    "/api/contacts-count/:idpersona",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await ContactModel.getQuantity(req.params.idpersona);
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
    "/api/contact-by/:idcontacto",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await ContactModel.getById(req.params.idcontacto);
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

  app.post("/api/contact-post", Services.verificar, async (req, res) => {
    const contactData = {
      idpersona: req.body.idpersona,
      nombre: req.body.nombre,
      correo: req.body.correo,
      telefono: req.body.telefono,
      idcontacto_tipo: req.body.idcontacto_tipo,
    };
    try {
      let results = await ContactModel.createContact(contactData);
      if (typeof results !== "undefined" && results.lenght > 0) {
        res.status(200).json(results);
      } else {
        res.status(200).json({ msg: "¡Contacto creado con éxito!" });
      }
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  app.put(
    "/api/contact-put/:idcontacto",
    Services.verificar,
    async (req, res) => {
      const contactData = {
        idcontacto: req.params.idcontacto,
        nombre: req.body.nombre,
        correo: req.body.correo,
        telefono: req.body.telefono,
        idcontacto_tipo: req.body.idcontacto_tipo,
      };

      try {
        let results = await ContactModel.updateContact(contactData);
        if (typeof results !== "undefined" && results.lenght > 0) {
          res.status(200).json(results);
        } else {
          res.status(200).json({ msg: "¡Contacto editado con éxito!" });
        }
      } catch (error) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  );

  app.put(
    "/api/contact-delete/:idcontacto",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await ContactModel.deleteContact(req.params.idcontacto);
        if (typeof results !== "undefined" && results.lenght > 0) {
          res.status(200).json(results);
        } else {
          res.status(200).json({ msg: "¡Contacto eliminado con éxito!" });
        }
      } catch (error) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  );

  app.get(
    "/api/contacts-get/:no_pagina/:paginas",
    Services.verificar,
    async (req, res) => {
      try {
        let results = await ContactModel.getAll(
          req.params.no_pagina,
          req.params.paginas
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

  app.get("/api/contacts-count/", Services.verificar, async (req, res) => {
    try {
      let results = await ContactModel.getQuantityContacts();
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

  app.get("/api/filter-contacts/", Services.verificar, async (req, res) => {
    try {
      let results = await ContactModel.getFilter();
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
};
