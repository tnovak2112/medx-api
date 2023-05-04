import {
  getComunaPorIdSQL,
  getComunasSQL,
} from "../../../core/querys/comunas.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");

export async function DBlistarComunas(_req: any, res: any) {
  try {
    const result = await database.simpleExecute(getComunasSQL);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBobtenerComuna(req: any, res: any) {
  const { commune_id } = req.query;

  try {
    const result = await database.simpleExecute(getComunaPorIdSQL, [
      commune_id,
    ]);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}
