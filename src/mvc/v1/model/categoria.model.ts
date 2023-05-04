import {
  getCategoriesSQL,
  getCategoryPerProfileIdSQL,
} from "../../../core/querys/categoria.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");

export async function DBgetCategorias(_req: any, res: any) {
  try {
    const result = await database.simpleExecute(getCategoriesSQL);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBgetCategoriasPorProfileID(req: any, res: any) {
  const { profile_id } = req.query;

  try {
    const result = await database.simpleExecute(getCategoryPerProfileIdSQL, [
      profile_id,
    ]);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}
