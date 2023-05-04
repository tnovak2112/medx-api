import {
  DBlistarSeguros,
  DBobtenerSegurosPorIdConsulta,
} from "../model/seguros.model";

export async function listarSeguros(req: any, res: any) {
  res = await DBlistarSeguros(req, res);
  return res;
}

export async function obtenerSegurosPorIdConsulta(req: any, res: any) {
  res = await DBobtenerSegurosPorIdConsulta(req, res);
  return res;
}
