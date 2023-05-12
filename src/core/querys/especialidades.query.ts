export const getEspecialidadesPorGradoIdSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.speciality WHERE degree_id = $1 ORDER BY name ASC`;

// ESPECIALIDADES POR PERFIL ID

export const getEspecialidadadPorPerfilIdSQL = `SELECT s.* 
FROM ${process.env.DATABASE_DATABASE}.profile_has_speciality phs 
JOIN ${process.env.DATABASE_DATABASE}.speciality s
ON phs.speciality_id = s.id
WHERE profile_id = $1`;
