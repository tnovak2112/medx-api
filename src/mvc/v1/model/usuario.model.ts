import {
  getUsuarioSQL,
  insertUsuarioSQL,
  updatePasswordSQL,
  updateUsuarioCodigoSQL,
} from "../../../core/querys/usuario.query";
import { emailCodigo } from "./email.model";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bytesToKey = require("evp_bytestokey");

export async function DBautenticacionUsuario(req: any, res: any) {
  const { email, password } = req.query;

  try {
    const result = await database.simpleExecute(getUsuarioSQL, [
      email,
      encriptarContraseña(password),
    ]);

    if (result.rows[0] !== undefined) {
      const token = jwt.sign(result.rows[0], process.env.API_TOKEN_KEY);

      res = msgHTTP.login200(res, token, result.rows[0]);
    } else {
      res = msgHTTP.error200(res, "Correo y Contraseña no válidos.");
    }
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBregistroUsuario(req: any, res: any) {
  const { email, password } = req.body;

  try {
    const passwordEncrypt = encriptarContraseña(password);

    const result = await database.simpleExecute(insertUsuarioSQL, [
      email,
      passwordEncrypt,
      2,
    ]);

    await emailCodigo(email, "Bienvenido a MEDX", "Gracias por registrarte!");

    res = msgHTTP.insert200(res, result);
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBgenerarCodigoUsuario(req: any, res: any) {
  const { email } = req.body;

  const codigo = generarCodigo();

  try {
    const result = await database.simpleExecute(updateUsuarioCodigoSQL, [
      codigo,
      email,
    ]);

    await emailCodigo(email, "Prueba", "El codigo es: " + codigo);

    res = msgHTTP.message200(res, result, "Código enviado correctamente.");
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBactualizarClaveUsuario(req: any, res: any) {
  const { email, password, code } = req.body;
  const passwordEncrypt = encriptarContraseña(password);

  try {
    const result = await database.simpleExecute(updatePasswordSQL, [
      passwordEncrypt,
      email,
      code,
    ]);

    res = msgHTTP.message200(
      res,
      result,
      "Contraseña actualizada correctamente."
    );
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

function encriptarContraseña(password: any) {
  const encryptionToken = bytesToKey(
    process.env.API_PASSWORD_KEY,
    null,
    256,
    16
  );

  const cipher = crypto.createCipheriv(
    "aes256",
    encryptionToken.key,
    encryptionToken.iv
  );

  return cipher.update(password, "utf8", "hex") + cipher.final("hex");
}

function generarCodigo() {
  return Math.floor(1000 + Math.random() * 9000);
}

//De-Ciphering
//const decipher = crypto.createDecipheriv('aes-256-cbc-hmac-sha1', encryptionToken.key, encryptionToken.iv);
//return JSON.parse(decipher.update(##VALUEtoDECRYPT##, 'hex', 'utf8') + decipher.final('utf8'));
