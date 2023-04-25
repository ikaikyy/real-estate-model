import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import nodemailer, { TransportOptions } from "nodemailer";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    option: reqOption,
    name: reqName,
    email: reqEmail,
    phone: reqPhone,
    message: reqMessage,
  } = req.body;

  const { email, password, client_id, client_secret, refresh_token } =
    process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: email,
      pass: password,
      clientId: client_id,
      clientSecret: client_secret,
      refreshToken: refresh_token,
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
    from: email,
    to: reqEmail,
    subject: "Aqui estão suas informações:",
    text: `
      Opção de contato: ${reqOption}
      Name: ${reqName}
      Email: ${reqEmail}
      Phone: ${reqPhone}
      Message: ${reqMessage}
    `,
    html: `
      <h1>Aqui estão suas informações:</h1>
      <p><strong>Opção de contato:</strong> ${reqOption}</p>
      <p><strong>Nome:</strong> ${reqName}</p>
      <p><strong>Email:</strong> ${reqEmail}</p>
      <p><strong>Telefone:</strong> ${reqPhone}</p>
      <p><strong>Mensagem:</strong> ${reqMessage}</p>
    `,
  });

  res.status(200).json({ message: "Email sent successfully" });
});

export default handler;
