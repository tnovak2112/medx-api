import {
  DBgetCategorias,
  DBgetCategoriasPorProfileID,
} from "../model/categoria.model";

export async function getCategorias(req: any, res: any) {
  res = await DBgetCategorias(req, res);
  return res;
}

export async function getCategoriasPorProfileID(req: any, res: any) {
  res = await DBgetCategoriasPorProfileID(req, res);
  return res;
}
