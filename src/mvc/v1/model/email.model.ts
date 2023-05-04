const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

let mailOptions = {
  from: process.env.EMAIL_USER,
  to: "",
  subject: "",
  text: "",
};

export async function emailCodigo(email: any, subject: any, body: any) {
  mailOptions.to = email;
  mailOptions.subject = subject;
  mailOptions.text = body;

  transporter.sendMail(mailOptions, function (err: any, _success: any) {
    if (err) {
      console.log(err);
    }
  });
}
