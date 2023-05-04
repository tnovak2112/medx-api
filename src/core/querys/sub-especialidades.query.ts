export const getSubEspecialidadesPorEspecialidadIdSQL = `SELECT * FROM medx.sub_speciality WHERE speciality_id = $1 ORDER BY name ASC`;

// SUBESPECIALIDADES POR PERFIL ID

export const getEspecialidadadPorPerfilIdSQL = `SELECT ss.* 
FROM medx.profile_has_sub_speciality phss 
JOIN medx.sub_speciality ss
ON phss.sub_speciality_id = ss.id
WHERE profile_id = $1`;
