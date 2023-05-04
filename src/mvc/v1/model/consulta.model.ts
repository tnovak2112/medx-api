import { getConsultaSQL } from "../../../core/querys/consulta.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");

export async function DBobtenerConsulta(req: any, res: any) {
  const { consult_id } = req.query;
  try {
    const result = await database.simpleExecute(getConsultaSQL, [consult_id]);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}
