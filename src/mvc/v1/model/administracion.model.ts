import {
  crearPerfil,
  crearPerfilCategoriaSQL,
  crearPerfilEspecialidadSQL,
  crearPerfilSubEspecialidadSQL,
  crearUsuario,
} from "../../../core/querys/administracion.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");

export async function DBadministracionCrearPerfilCompleto(req: any, res: any) {
  // USER
  const { email } = req.body;
  const [password, role_id] = ["", 2];
  // PROFILE
  const {
    first_name,
    middle_name,
    last_name,
    second_lastname,
    birth_date,
    age,
    rut,
    profile_photo,
    university_id,
    consult_id,
    graduation_year,
    other_studies,
    short_resume,
    instagram,
    linkedin,
    profile_has_category,
    profile_has_speciality,
    profile_has_sub_speciality,
  } = req.body;

  const activo = 1;

  try {
    const resultCreateUser = await database.simpleExecute(crearUsuario, [
      email,
      password,
      role_id,
    ]);

    // CREAR PERFIL
    if (resultCreateUser.rows[0].id) {
      let user_id = resultCreateUser.rows[0].id;
      const resultCreateProfile = await database.simpleExecute(crearPerfil, [
        first_name,
        middle_name,
        last_name,
        second_lastname,
        birth_date,
        age,
        rut,
        profile_photo,
        university_id,
        user_id,
        consult_id,
        graduation_year,
        other_studies,
        short_resume,
        instagram,
        linkedin,
        activo,
      ]);

      if (resultCreateProfile.rows[0].id) {
        let profile_id = resultCreateProfile.rows[0].id;
        // CREAR RELACION PERFIL CATEGORIAS
        await database.simpleExecute(crearPerfilCategoriaSQL, [
          profile_id,
          profile_has_category,
        ]);
        // CREAR RELACION PERFIL ESPECIALIDAD
        if (profile_has_speciality.length > 0) {
          profile_has_speciality.forEach(async (speciality_id: number) => {
            await database.simpleExecute(crearPerfilEspecialidadSQL, [
              profile_id,
              speciality_id,
            ]);
          });
        }
        // CREAR RELACION PERFIL SUB ESPECIALIDAD
        if (profile_has_sub_speciality.length > 0) {
          profile_has_sub_speciality.forEach(
            async (subSpeciality_id: number) => {
              await database.simpleExecute(crearPerfilSubEspecialidadSQL, [
                profile_id,
                subSpeciality_id,
              ]);
            }
          );
        }
      }
    }

    res = msgHTTP.resonse20(res, "resultCreateUser");
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}
