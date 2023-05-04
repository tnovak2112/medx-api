import {
  DBobtenerPerfil,
  DBobtenerPerfilesPorGrado,
} from "../model/perfil.model";

export async function obtenerPerfil(req: any, res: any) {
  res = await DBobtenerPerfil(req, res);
  return res;
}

export async function obtenerPerfilesPorGrado(req: any, res: any) {
  res = await DBobtenerPerfilesPorGrado(req, res);
  return res;
}
