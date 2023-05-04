export const getProfileSQL = `SELECT * FROM medx.profile WHERE user_id = $1`;

export const getProfilesPerCategoryIdSQL = `SELECT p.* 
FROM medx.profile_has_category phc
JOIN medx.profile p
ON phc.profile_id = p.id
WHERE phc.category_id = $1`;
