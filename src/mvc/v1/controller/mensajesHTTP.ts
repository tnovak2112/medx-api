module.exports.insert200 = (res: any, response: any, data?: any) => {
  res.status(200);
  res.json({
    status: 200,
    message: "Creado correctamente.",
    row_length: response.rowCount,
    data: data,
  });
  return res;
};

module.exports.update200 = (res: any, response: any, data?: any) => {
  res.status(200);
  res.json({
    status: 200,
    message: "Actualizado correctamente",
    row_length: response.rowCount,
    data: data,
  });
  return res;
};

module.exports.read200 = (res: any, response: any) => {
  res.status(200);
  res.json({
    status: 200,
    message:
      response.rows.length !== 0
        ? "Informacion encontrada correctamente"
        : "No se ha encontrado informacion",
    row_length: response.rows.length,
    data: response.rows,
  });
  return res;
};

module.exports.delete200 = (res: any) => {
  res.status(200);
  res.json({
    status: 200,
    message: "Borrado correctamente",
    data: [],
  });
  return res;
};

module.exports.error = (res: any, result: any) => {
  res.status(400);
  res.json({
    status: 400,
    message: "[PostgreSQL]: " + result,
    row_length: 0,
    data: [],
  });
  return res;
};

module.exports.error200 = (res: any, message: any) => {
  res.status(200);
  res.json({
    status: 200,
    message,
    row_length: 0,
    data: [],
  });
  return res;
};

module.exports.login200 = (res: any, token: any, data: any) => {
  res.status(200);
  res.json({
    status: 200,
    message: "Se ha autenticado correctamente.",
    row_length: 1,
    data,
    token,
  });
  return res;
};

module.exports.message200 = (res: any, response: any, message: any) => {
  res.status(200);
  res.json({
    status: 200,
    message,
    row_length: response.rowCount,
  });
  return res;
};

module.exports.tokenMessage200 = (
  res: any,
  token: any,
  data: any,
  message: any
) => {
  res.status(200);
  res.json({
    status: 200,
    message,
    row_length: 1,
    data,
    token,
  });
  return res;
};

/////// ALL RESPONSES

module.exports.response200 = (res: any, data: any) => {
  res.status(200);
  res.json({
    status: 200,
    data,
  });
  return res;
};
