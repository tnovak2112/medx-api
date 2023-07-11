import {
  DBautenticacionUsuario,
  DBregistroUsuario,
  DBgenerarCodigoUsuario,
  DBactualizarClaveUsuario,
  DBverificarCodigoUsuario,
} from "../model/usuario.model";

export async function autenticacionUsuario(req: any, res: any) {
  res = await DBautenticacionUsuario(req, res);
  return res;
}

export async function registroUsuario(req: any, res: any) {
  res = await DBregistroUsuario(req, res);
  return res;
}

export async function generarCodigoUsuario(req: any, res: any) {
  res = await DBgenerarCodigoUsuario(req, res);
  return res;
}

export async function verificarCodigoUsuario(req: any, res: any) {
  res = await DBverificarCodigoUsuario(req, res);
  return res;
}

export async function actualizarClaveUsuario(req: any, res: any) {
  res = await DBactualizarClaveUsuario(req, res);
  return res;
}
