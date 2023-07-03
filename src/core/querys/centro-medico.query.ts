export const litarCentroMedicoSQL = `
SELECT uuid, name, email FROM ${process.env.DATABASE_DATABASE}.medical_center`;

export const litarTiposCentroMedicoSQL = `
SELECT * FROM ${process.env.DATABASE_DATABASE}.medical_center_type`;

export const getCentroMedicoSQL = `
SELECT mc.*, mct.name as medical_center_type_name
FROM ${process.env.DATABASE_DATABASE}.medical_center mc 
JOIN ${process.env.DATABASE_DATABASE}.medical_center_type mct
ON mc.medical_center_type_id = mct.id
WHERE mc.uuid = $1`;

export const postCentroMedicoSQL = `
INSERT INTO ${process.env.DATABASE_DATABASE}.medxqa.medical_center 
(name, description, image, email, address, phone_1, phone_2, commune_id, medical_center_type_id, url, image_logo) 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
RETURNING uuid`;
