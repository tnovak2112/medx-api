export const getComunasSQL = `SELECT * FROM medx.commune ORDER BY name ASC`;

export const getComunaPorIdSQL = `SELECT * FROM medx.commune WHERE id = $1`;
