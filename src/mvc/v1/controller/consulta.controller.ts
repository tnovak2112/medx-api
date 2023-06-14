import { DBobtenerConsulta, DBcrearConsulta } from "../model/consulta.model";

export async function obtenerConsulta(req: any, res: any) {
  res = await DBobtenerConsulta(req, res);
  return res;
}

export async function crearConsulta(req: any, res: any) {
  res = await DBcrearConsulta(req, res);
  return res;
}
