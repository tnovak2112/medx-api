import {
  DBobtenerSubEspecialidades,
  DBobtenerSubEspecialidadPorIdPerfil,
} from "../model/sub-especialidades.model";

export async function obtenerSubEspecialidades(req: any, res: any) {
  res = await DBobtenerSubEspecialidades(req, res);
  return res;
}

export async function obtenerSubEspecialidadPorIdPerfil(req: any, res: any) {
  res = await DBobtenerSubEspecialidadPorIdPerfil(req, res);
  return res;
}
