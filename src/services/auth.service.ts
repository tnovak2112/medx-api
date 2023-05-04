const jwt = require("jsonwebtoken");

export async function autenticacion(req: any, res: any, next: any) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    validadorToken(req, res, next, bearerToken);
  } else {
    res.status(403);
    res.json({
      status: 403,
      message: "Error de autenticacion",
    });
    return res;
  }
}

function validadorToken(_req: any, res: any, next: any, token: any) {
  jwt.verify(token, process.env.API_TOKEN_KEY, (err: any) => {
    if (err) {
      res.status(403);
      res.json({
        status: 403,
        message: "El token ingresado es invalido",
      });
      return res;
    } else {
      next();
    }
  });
}
