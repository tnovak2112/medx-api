import {
  getGradosPorIdCategoriaSQL,
  getGradosSQL,
} from "../../../core/querys/grados.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");

export async function DBlistarGrados(_req: any, res: any) {
  try {
    const result = await database.simpleExecute(getGradosSQL);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBobtenerGradoPorIdCategoria(req: any, res: any) {
  const { category_id } = req.query;

  try {
    const result = await database.simpleExecute(getGradosPorIdCategoriaSQL, [
      category_id,
    ]);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}
