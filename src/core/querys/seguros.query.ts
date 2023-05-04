export const getSegurosSQL = `SELECT * FROM medx.insurance ORDER BY name ASC`;

export const getSegurosPorIdConsultaSQL = `SELECT * FROM medx.consult_has_insurance WHERE consult_id = $1`;
