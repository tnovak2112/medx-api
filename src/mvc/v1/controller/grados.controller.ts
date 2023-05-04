import {
  DBlistarGrados,
  DBobtenerGradoPorIdCategoria,
} from "../model/grados.model";

export async function listarGrados(req: any, res: any) {
  res = await DBlistarGrados(req, res);
  return res;
}

export async function obtenerGradoPorIdCategoria(req: any, res: any) {
  res = await DBobtenerGradoPorIdCategoria(req, res);
  return res;
}
