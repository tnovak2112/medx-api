import { DBlistarComunas, DBobtenerComuna } from "../model/comunas.model";

export async function listarComunas(req: any, res: any) {
  res = await DBlistarComunas(req, res);
  return res;
}

export async function obtenerComuna(req: any, res: any) {
  res = await DBobtenerComuna(req, res);
  return res;
}
