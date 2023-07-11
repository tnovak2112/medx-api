export const getProfileSQL = `SELECT 
id, 
first_name, 
middle_name, 
last_name, 
second_lastname, 
birth_date, 
profile_photo, 
university_id, 
consult_id, 
user_uuid, 
graduation_year, 
other_studies, 
short_resume, 
instagram, 
linkedin, 
activo, 
medical_center_uuid 
FROM ${process.env.DATABASE_DATABASE}.profile WHERE user_uuid = $1`;

export const getProfilesPerCategoryIdSQL = `SELECT p.id, 
p.first_name, 
p.middle_name, 
p.last_name, 
p.second_lastname, 
p.birth_date, 
p.profile_photo, 
p.university_id, 
p.consult_id, 
p.user_uuid, 
p.graduation_year, 
p.other_studies, 
p.short_resume, 
p.instagram, 
p.linkedin, 
p.activo, 
p.medical_center_uuid 
FROM ${process.env.DATABASE_DATABASE}.profile_has_category phc
JOIN ${process.env.DATABASE_DATABASE}.profile p
ON phc.profile_id = p.id
WHERE phc.category_id = $1`;

export const getProfilePerMedicalCenterSQL = `SELECT p.id, 
p.first_name, 
p.middle_name, 
p.last_name, 
p.second_lastname, 
p.birth_date, 
p.profile_photo, 
p.university_id, 
p.consult_id, 
p.user_uuid, 
p.graduation_year, 
p.other_studies, 
p.short_resume, 
p.instagram, 
p.linkedin, 
p.activo, 
p.medical_center_uuid, d.name as degree_name 
FROM ${process.env.DATABASE_DATABASE}.profile p 
JOIN ${process.env.DATABASE_DATABASE}.profile_has_category phc ON phc.profile_id = p.id 
JOIN ${process.env.DATABASE_DATABASE}.category c ON c.id = phc.category_id 
JOIN ${process.env.DATABASE_DATABASE}.degree d ON d.category_id = c.id
WHERE p.medical_center_uuid = $1`;
