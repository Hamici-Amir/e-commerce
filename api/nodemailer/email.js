import nodemailer from 'nodemailer';
import { VERIFICATION_EMAIL_TEMPLATE } from './emailTemplates.js';

const transporter = nodemailer.createTransport({

    service:"gmail", 
    auth: {
      user: "hatemtaleb803@gmail.com",
      pass: "zhbqsfculnidbdwi",
    },
  });
  
  const mailOptions = {
    from:'hatemtaleb803@gmail.com',
    to:"ya.bechiri@esi-sba.dz",
    subject:"email",
    html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", 555200),
  }

  transporter.sendMail(mailOptions,(err,sucess) => {
    if(err){
        console.log(err);
    }else{
        console.log("sendn ")
    }
  })