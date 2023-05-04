import {
  getProfileSQL,
  getProfilesPerCategoryIdSQL,
} from "../../../core/querys/perfil.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");

export async function DBobtenerPerfil(req: any, res: any) {
  const { user_id } = req.query;

  try {
    const result = await database.simpleExecute(getProfileSQL, [user_id]);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBobtenerPerfilesPorGrado(req: any, res: any) {
  const { degree_id } = req.query;

  try {
    const result = await database.simpleExecute(getProfilesPerCategoryIdSQL, [
      degree_id,
    ]);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBobtenerPerfilesPorCoincidencia(req: any, res: any) {
  const { user_name } = req.query;
  console.log(user_name);

  try {
    const result = await database.simpleExecute(
      `SELECT * FROM medx.profile WHERE REGEXP_LIKE(profile.first_name, '${user_name}', 'i')`
    );

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}
