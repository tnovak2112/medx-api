import {
  autenticacionUsuario,
  registroUsuario,
  generarCodigoUsuario,
  actualizarClaveUsuario,
  verificarCodigoUsuario,
} from "../../mvc/v1/controller/usuario.controller";

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

router.get("/login", autenticacionUsuario);

router.post("/registro", registroUsuario);

router.put("/generar_codigo", generarCodigoUsuario);

router.put("/verificar_codigo", verificarCodigoUsuario);

router.put("/actualizar_clave", actualizarClaveUsuario);

module.exports = router;
