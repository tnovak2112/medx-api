export const insertUsuarioSQL = `INSERT INTO ${process.env.DATABASE_DATABASE}.user (email, password,code,role_id) VALUES ($1, '', $2, $3)`;

export const getUsuarioSQL = `SELECT uuid, email, role_id FROM ${process.env.DATABASE_DATABASE}.user WHERE email = $1 AND password = $2`;

export const updatePasswordSQL = `UPDATE ${process.env.DATABASE_DATABASE}.user SET password = $1 WHERE email = $2 AND code = $3`;

export const verificarCodigoUsuarioSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.user WHERE code = $1 AND email = $2`;
