import { DBobtenerConsulta } from "../model/consulta.model";

export async function obtenerConsulta(req: any, res: any) {
  res = await DBobtenerConsulta(req, res);
  return res;
}
