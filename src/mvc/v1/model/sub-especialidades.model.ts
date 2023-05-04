import {
  getEspecialidadadPorPerfilIdSQL,
  getSubEspecialidadesPorEspecialidadIdSQL,
} from "../../../core/querys/sub-especialidades.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");

export async function DBobtenerSubEspecialidades(req: any, res: any) {
  const { speciality_id } = req.query;
  try {
    const result = await database.simpleExecute(
      getSubEspecialidadesPorEspecialidadIdSQL,
      [speciality_id]
    );

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBobtenerSubEspecialidadPorIdPerfil(req: any, res: any) {
  const { profile_id } = req.query;

  try {
    const result = await database.simpleExecute(
      getEspecialidadadPorPerfilIdSQL,
      [profile_id]
    );

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}
