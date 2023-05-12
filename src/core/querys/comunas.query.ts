export const getComunasSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.commune ORDER BY name ASC`;

export const getComunaPorIdSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.commune WHERE id = $1`;
