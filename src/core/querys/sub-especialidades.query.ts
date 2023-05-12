export const getSubEspecialidadesPorEspecialidadIdSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.sub_speciality WHERE speciality_id = $1 ORDER BY name ASC`;

// SUBESPECIALIDADES POR PERFIL ID

export const getEspecialidadadPorPerfilIdSQL = `SELECT ss.* 
FROM ${process.env.DATABASE_DATABASE}.profile_has_sub_speciality phss 
JOIN ${process.env.DATABASE_DATABASE}.sub_speciality ss
ON phss.sub_speciality_id = ss.id
WHERE profile_id = $1`;
