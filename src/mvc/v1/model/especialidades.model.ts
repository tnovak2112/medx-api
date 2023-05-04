import {
  getEspecialidadadPorPerfilIdSQL,
  getEspecialidadesPorGradoIdSQL,
} from "../../../core/querys/especialidades.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");

export async function DBlistarEspecialidades(req: any, res: any) {
  const { degree_id } = req.query;
  try {
    const result = await database.simpleExecute(
      getEspecialidadesPorGradoIdSQL,
      [degree_id]
    );

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBobtenerEspecialidadPorIdPerfil(req: any, res: any) {
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
