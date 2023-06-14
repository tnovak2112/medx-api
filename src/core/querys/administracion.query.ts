export const crearUsuario = `
INSERT INTO ${process.env.DATABASE_DATABASE}.user 
(email,password,role_id) 
VALUES ($1, $2, $3) 
RETURNING id`;

export const crearPerfil = `
INSERT INTO ${process.env.DATABASE_DATABASE}.profile 
(   first_name,
    middle_name,
    last_name,
    second_lastname,
    birth_date,
    age,
    rut,
    profile_photo,
    university_id,
    user_id,
    consult_id,
    graduation_year,
    other_studies,
    short_resume,
    instagram,
    linkedin,
    activo) 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) 
RETURNING id`;

export const crearPerfilCategoriaSQL = `
INSERT INTO ${process.env.DATABASE_DATABASE}.profile_has_category 
(profile_id, category_id) 
VALUES ($1, $2)`;

export const crearPerfilEspecialidadSQL = `
INSERT INTO ${process.env.DATABASE_DATABASE}.profile_has_speciality 
(profile_id, speciality_id) 
VALUES ($1, $2)`;

export const crearPerfilSubEspecialidadSQL = `
INSERT INTO ${process.env.DATABASE_DATABASE}.profile_has_sub_speciality 
(profile_id, sub_speciality_id) 
VALUES ($1, $2)`;
