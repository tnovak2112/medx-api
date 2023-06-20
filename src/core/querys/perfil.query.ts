export const getProfileSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.profile WHERE user_uuid = $1`;

export const getProfilesPerCategoryIdSQL = `SELECT p.* 
FROM ${process.env.DATABASE_DATABASE}.profile_has_category phc
JOIN ${process.env.DATABASE_DATABASE}.profile p
ON phc.profile_id = p.id
WHERE phc.category_id = $1`;
