const FiltersModel = require("../models/Filters");
const Services = require("../service");

module.exports = async function (app) {
    app.get("/api/search/:nombre_comercial", async (req, res) => {
        console.log(req.params);
        try {
            let results = await FiltersModel.searchNombreComercial(req.params.nombre_comercial);
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
