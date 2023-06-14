import {
  getConsultaSQL,
  postConsultaPrevicionSQL,
  postConsultaSQL,
} from "../../../core/querys/consulta.query";

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

export async function DBcrearConsulta(req: any, res: any) {
  const {
    type,
    name,
    address,
    commune_id,
    phone,
    whatsapp,
    email,
    consult_has_insurance,
  } = req.body;

  try {
    const result = await database.simpleExecute(postConsultaSQL, [
      type,
      name,
      address,
      commune_id,
      phone,
      whatsapp,
      email,
    ]);

    if (result.rows[0].id) {
      consult_has_insurance.forEach(async (insurance_id: any) => {
        await database.simpleExecute(postConsultaPrevicionSQL, [
          result.rows[0].id,
          insurance_id,
        ]);
      });
    }

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}
