import nodemailer from 'nodemailer';
import { VERIFICATION_EMAIL_TEMPLATE } from './emailTemplates.js';


  export const VerifyEmail = (email,code) => {
    const transporter = nodemailer.createTransport({

      service:"gmail", 
      auth: {
        user: process.env.email,
        pass: process.env.pass,
      },
    });
    
    const mailOptions = {
      from:process.env.email,
      to:email,
      subject:"email",
      html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", code),
    }
  
    transporter.sendMail(mailOptions,(err,sucess) => {
      if(err){
          console.log(err);
      }else{
          console.log("sendn ",sucess,"err",err)
      }
    })
  }

