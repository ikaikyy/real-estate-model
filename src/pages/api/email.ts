import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import nodemailer, { TransportOptions } from "nodemailer";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { option, name, email, phone, message } = req.body;

  const { EMAIL, PASSWORD, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } =
    process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      pass: PASSWORD,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
    },
  } as TransportOptions);

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  await transporter.sendMail({
    from: EMAIL,
    to: email,
    subject: "Aqui estão suas informações:",
    text: `
      Opção de contato: ${option}
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
    html: `
      <h1>Aqui estão suas informações:</h1>
      <p><strong>Opção de contato:</strong> ${option}</p>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Mensagem:</strong> ${message}</p>
    `,
  });

  res.status(200).json({ message: "Email sent successfully" });
});

export default handler;
