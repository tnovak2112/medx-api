import {
  getCategorias,
  getCategoriasPorProfileID,
} from "../../mvc/v1/controller/categoria.controller";

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

router.get("/listar", getCategorias);

router.get("/obtenerCategoria", getCategoriasPorProfileID);

module.exports = router;
