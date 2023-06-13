import { getProfileSQL } from "../../../core/querys/perfil.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");

export async function DBobtenerPerfil(req: any, res: any) {
  const { user_id } = req.query;

  try {
    const result = await database.simpleExecute(getProfileSQL, [user_id]);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBobtenerPerfilesPorGrado(req: any, res: any) {
  const { degree_id, specialityId, subSpecialityId, communeId, insuranceId } =
    req.query;

  try {
    let join = [];
    let and = [];
    let sql = "";

    if (specialityId !== "0") {
      join.push(
        `
        JOIN ${process.env.DATABASE_DATABASE}.profile_has_speciality phs ON phc.profile_id = phs.profile_id`
      );
      and.push(`
        AND phs.speciality_id = ${specialityId}`);
    }
    if (subSpecialityId !== "0") {
      join.push(
        `
        JOIN ${process.env.DATABASE_DATABASE}.profile_has_sub_speciality phss ON phc.profile_id = phss.profile_id`
      );
      and.push(`
        AND phss.sub_speciality_id = ${subSpecialityId}`);
    }
    if (communeId !== "0") {
      join.push(``);
      and.push(`
        AND c.commune_id = ${communeId}`);
    }
    if (insuranceId !== "0") {
      join.push(
        `
        JOIN ${process.env.DATABASE_DATABASE}.consult_has_insurance chi ON c.id = chi.consult_id`
      );
      and.push(`
        AND chi.insurance_id = ${insuranceId}`);
    }

    let sqlStart = `SELECT p.*
        FROM ${process.env.DATABASE_DATABASE}.profile_has_category phc
        JOIN ${process.env.DATABASE_DATABASE}.profile p ON phc.profile_id = p.id
        JOIN ${process.env.DATABASE_DATABASE}.consult c ON p.consult_id = c.id`;
    let sqlEnd = `
        WHERE phc.category_id = ${degree_id}
        AND c.id = p.consult_id`;

    if (join.length > 0) {
      for (let index = 0; index < join.length; index++) {
        sqlStart = sqlStart + `${join[index]}`;
        sqlEnd = sqlEnd + `${and[index]}`;
      }
    }

    sql = sqlStart + sqlEnd;

    const result = await database.simpleExecute(sql);

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBobtenerPerfilesPorCoincidencia(req: any, res: any) {
  const { user_name } = req.query;

  try {
    const result = await database.simpleExecute(
      `SELECT * FROM ${
        process.env.DATABASE_DATABASE
      }.profile WHERE LOWER(profile.first_name) SIMILAR TO '%${user_name.toLowerCase()}%';`
    );

    res = msgHTTP.read200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}
