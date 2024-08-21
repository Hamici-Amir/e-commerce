//const { MailtrapClient } = require("mailtrap");

import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";


dotenv.config();


const TOKEN = process.env.token ;
const ENDPOINT = process.env.End_Point;

export const mailtrapClient = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Hatem",
};
/*
const recipients = [
  {
    email: "hamiciamir525@gmail.com",
  }
];
/*
client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
  */