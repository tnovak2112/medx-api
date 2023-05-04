export const getEspecialidadesPorGradoIdSQL = `SELECT * FROM medx.speciality WHERE degree_id = $1 ORDER BY name ASC`;

// ESPECIALIDADES POR PERFIL ID

export const getEspecialidadadPorPerfilIdSQL = `SELECT s.* 
FROM medx.profile_has_speciality phs 
JOIN medx.speciality s
ON phs.speciality_id = s.id
WHERE profile_id = $1`;
