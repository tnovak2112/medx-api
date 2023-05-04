export const insertUsuarioSQL = `INSERT INTO medx.user (email,password,role_id) VALUES ($1, $2, $3)`;

export const getUsuarioSQL = `SELECT id, email, role_id FROM medx.user WHERE email = $1 AND password = $2`;

export const updateUsuarioCodigoSQL = `UPDATE medx.user SET code = $1 WHERE email = $2`;

export const updatePasswordSQL = `UPDATE medx.user SET password = $1 WHERE email = $2 AND code = $3`;
