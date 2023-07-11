import {
  getUsuarioSQL,
  insertUsuarioSQL,
  updatePasswordSQL,
  verificarCodigoUsuarioSQL,
} from "../../../core/querys/usuario.query";

const msgHTTP = require("../controller/mensajesHTTP");
const database = require("../../../services/database.service");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bytesToKey = require("evp_bytestokey");
import AWS from "aws-sdk";

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

export async function DBregistroUsuario(_req: any, _res: any) {
  // const { email, password } = req.body;
  // try {
  //   const passwordEncrypt = encriptarContraseña(password);
  //   const result = await database.simpleExecute(insertUsuarioSQL, [
  //     email,
  //     passwordEncrypt,
  //     2,
  //   ]);
  //   //await emailCodigo(email, "Bienvenido a MEDX", "Gracias por registrarte!");
  //   res = msgHTTP.insert200(res, result);
  // } catch (error) {
  //   res = msgHTTP.error(res, error);
  // }
  // return res;
}

export async function DBgenerarCodigoUsuario(req: any, res: any) {
  const { email } = req.body;
  const codigo = generarCodigo();

  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_SNS,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_SNS,
    region: process.env.AWS_REGION,
  });

  try {
    const result = await database.simpleExecute(insertUsuarioSQL, [
      email,
      codigo,
      2,
    ]);

    const sns = new AWS.SNS();
    const phoneNumber = "+56993942998";
    const params = {
      Message: `Tu codigo de registro en Medxapp.cl es: ${codigo}. Porfavor no compartas este código. Comencemos!`,
      PhoneNumber: phoneNumber,
    };

    const resultSMS = await sns.publish(params).promise();

    res = msgHTTP.message200(res, result, "Código enviado correctamente.");
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

export async function DBverificarCodigoUsuario(req: any, res: any) {
  const { codigo, email } = req.body;
  console.log(codigo, email);

  try {
    const result = await database.simpleExecute(verificarCodigoUsuarioSQL, [
      codigo,
      email,
    ]);

    res = msgHTTP.message200(res, result, "El código es correcto");
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
  return Math.floor(100000 + Math.random() * 900000);
}

//De-Ciphering
//const decipher = crypto.createDecipheriv('aes-256-cbc-hmac-sha1', encryptionToken.key, encryptionToken.iv);
//return JSON.parse(decipher.update(##VALUEtoDECRYPT##, 'hex', 'utf8') + decipher.final('utf8'));
