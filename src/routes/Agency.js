const AgencyModel = require("../models/Agency");
const Services = require("../service");

module.exports = async function (app) {
    app.get("/api/agencies/all/:idusuario/:no_pagina/:paginas", Services.verificar, async (req, res) => {
        try {
            let results = await AgencyModel.getAll(req.params.idusuario, req.params.no_pagina, req.params.paginas);
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

    app.get("/api/agencies-count/:idusuario", Services.verificar, async (req, res) => {
        try {
            let results = await AgencyModel.getQuantity(req.params.idusuario);
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

    app.get("/api/agencies-detail/:idcliente", Services.verificar, async (req, res) => {
        try {
            let results = await AgencyModel.getDetailAgency(req.params.idcliente);
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

    // Endpoints administrador

    app.get("/api/agencies-admin/all/:no_pagina/:paginas", Services.verificar, async (req, res) => {
        try {
            let results = await AgencyModel.getAllAdmin(req.params.no_pagina, req.params.paginas);
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

    app.get("/api/agencies-admin/count", Services.verificar, async (req, res) => {
        try {
            let results = await AgencyModel.getQuantityAdmin();
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