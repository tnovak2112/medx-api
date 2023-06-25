export const getProfileSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.profile WHERE user_uuid = $1`;

export const getProfilesPerCategoryIdSQL = `SELECT p.* 
FROM ${process.env.DATABASE_DATABASE}.profile_has_category phc
JOIN ${process.env.DATABASE_DATABASE}.profile p
ON phc.profile_id = p.id
WHERE phc.category_id = $1`;

export const getProfilePerMedicalCenterSQL = `SELECT p.*, d.name as degree_name 
FROM ${process.env.DATABASE_DATABASE}.profile p 
JOIN ${process.env.DATABASE_DATABASE}.profile_has_category phc ON phc.profile_id = p.id 
JOIN ${process.env.DATABASE_DATABASE}.category c ON c.id = phc.category_id 
JOIN ${process.env.DATABASE_DATABASE}.degree d ON d.category_id = c.id
WHERE p.medical_center_uuid = $1`;
