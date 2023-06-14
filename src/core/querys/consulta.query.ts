export const getConsultaSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.consult WHERE id = $1`;

export const postConsultaSQL = `
INSERT INTO ${process.env.DATABASE_DATABASE}.consult 
(type, name, address, commune_id, phone, whatsapp, email) 
VALUES ($1, $2, $3, $4, $5, $6, $7) 
RETURNING id`;

export const postConsultaPrevicionSQL = `
INSERT INTO ${process.env.DATABASE_DATABASE}.consult_has_insurance 
(consult_id, insurance_id) 
VALUES ($1, $2)`;
