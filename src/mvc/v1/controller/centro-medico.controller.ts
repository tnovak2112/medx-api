import {
  DBlistarCentroMedico,
  DBobtenerCentroMedico,
  DBcrearCentroMedico,
  DBlistarTiposCentroMedico,
} from "../model/centro-medico.model";

export async function listarCentroMedico(req: any, res: any) {
  res = await DBlistarCentroMedico(req, res);
  return res;
}

export async function obtenerCentroMedico(req: any, res: any) {
  res = await DBobtenerCentroMedico(req, res);
  return res;
}

export async function crearCentroMedico(req: any, res: any) {
  res = await DBcrearCentroMedico(req, res);
  return res;
}

export async function listarTiposCentroMedico(req: any, res: any) {
  res = await DBlistarTiposCentroMedico(req, res);
  return res;
}
