import { administracionCrearPerfilCompleto } from "../../mvc/v1/controller/administracion.controller";
import { autenticacion } from "../../services/auth.service";

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

router.put(
  "/crearPerfilCompleto",
  autenticacion,
  administracionCrearPerfilCompleto
);

module.exports = router;
