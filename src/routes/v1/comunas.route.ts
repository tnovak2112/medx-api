import {
  listarComunas,
  obtenerComuna,
} from "../../mvc/v1/controller/comunas.controller";

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

router.get("/listar", listarComunas);

router.get("/obtener", obtenerComuna);

module.exports = router;
