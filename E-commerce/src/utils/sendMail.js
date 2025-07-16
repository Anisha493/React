import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
 service: "gmail",
  auth: {
    user: "np05cp4a230070@iic.edu.np",
    pass: "zxkc amwj fxsl quwf",
  },
});

// Wrap in an async IIFE so we can use await.
const sendMail = async (email,subject,message) => {
  const info = await transporter.sendMail({
    from: '"Anisha Karki" <np05cp4a230070@iic.edu.np>',
    to: email,
    subject: subject,
    // text: "Hello world?", 
    html: `<b>${message}</b>`,
  });

  console.log("Message sent:", info.messageId);
};


export {sendMail};
