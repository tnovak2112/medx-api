export const getCategoriesSQL = `SELECT id, name, icon, path FROM ${process.env.DATABASE_DATABASE}.category`;

// SUPERTABLA

export const getCategoryPerProfileIdSQL = `SELECT profile_id, category_id FROM ${process.env.DATABASE_DATABASE}.profile_has_category WHERE profile_id = $1`;
