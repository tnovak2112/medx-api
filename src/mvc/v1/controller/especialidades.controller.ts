import {
  DBlistarEspecialidades,
  DBobtenerEspecialidadPorIdPerfil,
} from "../model/especialidades.model";

export async function listarEspecialidades(req: any, res: any) {
  res = await DBlistarEspecialidades(req, res);
  return res;
}

export async function obtenerEspecialidadPorIdPerfil(req: any, res: any) {
  res = await DBobtenerEspecialidadPorIdPerfil(req, res);
  return res;
}
