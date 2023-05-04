import {
  getSegurosPorIdConsultaSQL,
  getSegurosSQL,
} from "../../../core/querys/seguros.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");

export async function DBlistarSeguros(_req: any, res: any) {
  try {
    const result = await database.simpleExecute(getSegurosSQL);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBobtenerSegurosPorIdConsulta(req: any, res: any) {
  const { consult_id } = req.query;

  try {
    const result = await database.simpleExecute(getSegurosPorIdConsultaSQL, [
      consult_id,
    ]);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}
