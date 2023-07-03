import {
  getCentroMedicoSQL,
  litarCentroMedicoSQL,
  litarTiposCentroMedicoSQL,
  postCentroMedicoSQL,
} from "../../../core/querys/centro-medico.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");

export async function DBlistarCentroMedico(_req: any, res: any) {
  try {
    const result = await database.simpleExecute(litarCentroMedicoSQL);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

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
    url,
    image_logo,
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
      url,
      image_logo,
    ]);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBlistarTiposCentroMedico(_req: any, res: any) {
  try {
    const result = await database.simpleExecute(litarTiposCentroMedicoSQL);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}
