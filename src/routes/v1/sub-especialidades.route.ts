import {
  obtenerSubEspecialidades,
  obtenerSubEspecialidadPorIdPerfil,
} from "../../mvc/v1/controller/sub-especialidades.controller";

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

router.get("/obtener", obtenerSubEspecialidades);

router.get(
  "/obtenerSubEspecialidadPorIdPerfil",
  obtenerSubEspecialidadPorIdPerfil
);

module.exports = router;
