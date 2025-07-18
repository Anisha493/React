import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
 service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Wrap in an async IIFE so we can use await.
const sendMail = async (email,subject,message) => {
  const info = await transporter.sendMail({
    from: '"Anisha Karki" <np05cp4a230070@iic.edu.np>',
    to: email,
    subject: subject,
    // text: "Hello world?",  `
    html: `<b>${message}</b>`,
  });

  console.log("Message sent:", info.messageId);
};


export {sendMail};
