import {
  listarCentroMedico,
  obtenerCentroMedico,
  crearCentroMedico,
} from "../../mvc/v1/controller/centro-medico.controller";
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

router.get("/listar", listarCentroMedico);

router.get("/obtener", obtenerCentroMedico);

router.put("/crear", autenticacion, crearCentroMedico);

module.exports = router;
