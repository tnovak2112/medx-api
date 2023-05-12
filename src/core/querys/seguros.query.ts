export const getSegurosSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.insurance ORDER BY name ASC`;

export const getSegurosPorIdConsultaSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.consult_has_insurance WHERE consult_id = $1`;
