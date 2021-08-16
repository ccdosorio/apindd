const Activity = require("../models/Activity");
const ActivityModel = require("../models/Activity");
const Services = require("../service");


module.exports = async function (app) {

  //LISTAR TODAS LAS ACTIVIDADES
  app.get("/api/activity/all/sesion/:idusuario", Services.verificar, async (req, res) => {
    console.log(req.params)
    
    try {
      let results = await ActivityModel.getAllActividad(req.params.idusuario);
      console.log("daaa->",results)
      if (typeof results !== "undefined" && results.length > 0) {
        return res.status(200).json(results);
      } else {
        res.status(204).json({ msg: "Not Content" });
        
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  });



  //AGREGAR ACTIVIDADES
  app.post("/api/activity/add/sesion", Services.verificar, async (req, res) => {

    const actividad_data = {
      titulo: req.body.titulo,
      idusuario: req.body.idusuario,
      fecha_creacion_actividad: new Date(req.body.fecha_creacion_actividad),
      color_css:req.body.color_css
    };

    try {
      let results = await ActivityModel.addActividad(actividad_data);
      let results2 = await ActivityModel.getAllActividad(req.body.idusuario);
      if (typeof results !== "undefined" && results.lenght > 0) {
        res.status(200).json(results);
      } else {

        return res.status(200).json(results2);


      }
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //OBTENER UNA ACTIVIDAD
  app.get("/api/activity/:idactividad", async (req, res) => {
    try {
      let results = await ActivityModel.getById(req.params.idactividad);
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


  // ACTUALIZAR ACTIVIDAD
  app.post("/api/activity/update/sesion/:idactividad", Services.verificar, async (req, res) => {
    console.log(req.body)
    
    /*if(req.body.idactividad_tipo==null){
      idactividad_tipo 
    }else{
      idactividad_tipo=req.body.idactividad_tipo
    }

    if(req.body.idactividad_resultado==null){
      idactividad_resultado 
    }else{
      idactividad_resultado=req.body.idactividad_resultado
    }*/

    const actividad_data = {
      idactividad: req.body.idactividad,
      titulo: req.body.titulo,
      idusuario: req.body.idusuario,
      fecha_creacion_actividad: new Date(req.body.fecha_creacion_actividad),
      contacto: req.body.contacto,
      propuesta: req.body.propuesta,
      monto_cotizado: req.body.monto_cotizado,
      monto_venta: req.body.monto_venta,
      observacion: req.body.observacion,
      color_css:req.body.color_css,
      idactividad_tipo:req.body.idactividad_tipo,
      idactividad_resultado:req.body.idactividad_resultado,
      idejecutivo:req.body.idejecutivo,
      idcliente:req.body.idcliente,
      hora_inicio:new Date(req.body.hora_inicio),
      hora_fin:new Date(req.body.hora_fin),
      gasto_reunion:req.body.gasto_reunion,
      hora_inicio_dt:new Date(req.body.hora_inicio_dt),
      hora_fin_dt:new Date(req.body.hora_fin_dt)
    };

    console.log(actividad_data)

    try {
      let results = await ActivityModel.updateActividad(actividad_data);
      let results2 = await ActivityModel.getAllActividad(req.body.idusuario);
      if (typeof results !== "undefined" && results.lenght > 0) {
        res.status(200).json(results);
      } else {
        //res.status(204).json({ msg: "Actividad actualizada" });
        return res.status(200).json(results2);


      }
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  });

   //OBTENER UNA ACTIVIDAD
   app.post("/api/activity/delete/:idactividad", async (req, res) => {
    try {
      let results = await ActivityModel.deleteActividad(req.params.idactividad);
      let results2 = await ActivityModel.getAllActividad();
      console.log(results2)
      if (typeof results !== "undefined" && results.length > 0) {
        res.status(200).json(results);
      } else {
        res.status(200).json(results2);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  });
}