import {
  listarSeguros,
  obtenerSegurosPorIdConsulta,
} from "../../mvc/v1/controller/seguros.controller";

const express = require("express");
const router = express.Router();
/*
VERBOS
*********************************************************************
GET:    Obtener entidad(es)
POST:   Crear una entidad
PUT:    Modificar una entidad o crear una nueva en caso de no existir
PATCH:  Modificar parcialmente una entidad
DELETE: Eliminar una entidad
*********************************************************************
*/

router.get("/listar", listarSeguros);

router.get("/obtener", obtenerSegurosPorIdConsulta);

module.exports = router;
