import { DBadministracionCrearPerfilCompleto } from "../model/administracion.model";

export async function administracionCrearPerfilCompleto(req: any, res: any) {
  res = await DBadministracionCrearPerfilCompleto(req, res);
  return res;
}
