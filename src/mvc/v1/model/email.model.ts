const msgHTTP = require("../controller/mensajesHTTP");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

import AWS from "aws-sdk";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(
  process.env.EMAIL_CLIENT_ID,
  process.env.EMAIL_CLIENT_SECRET
);

OAuth2_client.setCredentials({
  refresh_token: process.env.EMAIL_REFRESH_TOKEN,
});

const emailFolderPath =
  path.dirname(path.dirname(path.dirname(__dirname))) + `/core/emails/`;

export async function DBformularioContacto(req: any, res: any) {
  const { nombre, apellido, telefono, correo, mensaje } = req.body;
  try {
    const accessToken = OAuth2_client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    fs.readFile(
      `${emailFolderPath}EmailContacto.html`,
      "utf8",
      (error: any, htmlTemplate: any) => {
        if (error) {
          console.log("Error al leer el archivo HTML:", error);
          return;
        }

        const htmlContent = htmlTemplate
          .replace("{{nombre}}", nombre)
          .replace("{{apellido}}", apellido)
          .replace("{{telefono}}", telefono)
          .replace("{{correo}}", correo)
          .replace("{{mensaje}}", mensaje);

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `Mensaje de ${nombre} ${apellido}`,
          html: htmlContent,
        };

        transport.sendMail(mailOptions, (error: any, response: any) => {
          if (error) {
            res = msgHTTP.response200(res, error);
          } else {
            res = msgHTTP.response200(res, response);
          }
        });
      }
    );
    res = msgHTTP.response200(res, "LISTO");
  } catch (error) {
    res = msgHTTP.error(res, error);
  }
  return res;
}

// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });

const client = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function DBregisterMail(_req: any, _res: any) {
  const filePath = `${emailFolderPath}EmailContacto.html`;

  try {
    const ses = new AWS.SES();
    const htmlContent = fs.readFileSync(filePath, "utf-8");

    const params = {
      Source: process.env.AWS_EMAIL,
      Destination: {
        ToAddresses: ["ignacio.fuentes@genesys.cl"],
      },
      Message: {
        Subject: {
          Data: "Hello from AWS SES",
        },
        Body: {
          Html: {
            Data: htmlContent,
          },
        },
      },
    };

    const command = new SendEmailCommand(params);
    const result = await client.send(command);
    console.log("Email sent successfully:", result);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
  return null;
}
