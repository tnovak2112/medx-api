import { DBformularioContacto } from "../model/email.model";

export async function formularioContacto(req: any, res: any) {
  res = await DBformularioContacto(req, res);
  return res;
}
