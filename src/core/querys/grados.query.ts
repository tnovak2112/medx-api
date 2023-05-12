export const getGradosSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.degree`;

export const getGradosPorIdCategoriaSQL = `SELECT * FROM ${process.env.DATABASE_DATABASE}.degree WHERE category_id = $1`;
