import {
  getCentroMedicoSQL,
  postCentroMedicoSQL,
} from "../../../core/querys/centro-medico.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");

export async function DBobtenerCentroMedico(req: any, res: any) {
  const { uuid } = req.query;
  try {
    const result = await database.simpleExecute(getCentroMedicoSQL, [uuid]);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBcrearCentroMedico(req: any, res: any) {
  const {
    name,
    description,
    image,
    email,
    address,
    phone_1,
    phone_2,
    commune_id,
    medical_center_type_id,
  } = req.body;

  try {
    const result = await database.simpleExecute(postCentroMedicoSQL, [
      name,
      description,
      image,
      email,
      address,
      phone_1,
      phone_2,
      commune_id,
      medical_center_type_id,
    ]);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}
