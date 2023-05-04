export const getCategoriesSQL = `SELECT id, name, icon, path FROM medx.category`;

// SUPERTABLA

export const getCategoryPerProfileIdSQL = `SELECT profile_id, category_id FROM medx.profile_has_category WHERE profile_id = $1`;
