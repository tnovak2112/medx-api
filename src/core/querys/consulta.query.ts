export const getConsultaSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.consult WHERE id = $1`;
