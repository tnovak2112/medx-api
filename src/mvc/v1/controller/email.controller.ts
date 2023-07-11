import { DBformularioContacto, DBregisterMail } from "../model/email.model";

export async function formularioContacto(req: any, res: any) {
  res = await DBformularioContacto(req, res);
  return res;
}

export async function registerMail(req: any, res: any) {
  res = await DBregisterMail(req, res);
  return res;
}
