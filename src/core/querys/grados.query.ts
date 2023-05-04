export const getGradosSQL = `SELECT * FROM medx.degree`;

export const getGradosPorIdCategoriaSQL = `SELECT * FROM medx.degree WHERE category_id = $1`;
