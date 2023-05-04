import * as swaggerDocument from "../api-docs/v1.swagger.json";

const express = require("express");
const swaggerUi = require("swagger-ui-express");

const v1 = express({ caseSensitive: false });

/**
 * Endpoint para Swagger
 */

v1.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * Endpoint para User
 */

v1.use("/usuario", require("./v1/usuario.route"));

/**
 * Endpoint para Category
 */

v1.use("/categorias", require("./v1/categoria.route"));

/**
 * Endpoint para Profile
 */

v1.use("/perfil", require("./v1/perfil.route"));

/**
 * Endpoint para Consult
 */

v1.use("/consulta", require("./v1/consulta.route"));

/**
 * Endpoint para Insurance
 */

v1.use("/seguros", require("./v1/seguros.route"));

/**
 * Endpoint para Speciality
 */

v1.use("/especialidades", require("./v1/especialidades.route"));

/**
 * Endpoint para Sub Speciality
 */

v1.use("/subEspecialidades", require("./v1/sub-especialidades.route"));

/**
 * Endpoint para Degree
 */

v1.use("/grados", require("./v1/grados.route"));

/**
 * Endpoint para Commune
 */

v1.use("/comunas", require("./v1/comunas.route"));

/**
 * Endpoint para Region
 */

// v1.use("/regiones", require("./v1/regiones.route"));

module.exports = { v1 }; //{ v1, v2 }
