import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
 service: "gmail",
  auth: {
    user: "np05cp4a230070@iic.edu.np",
    pass: "zxkc amwj fxsl quwf",
  },
});

// Wrap in an async IIFE so we can use await.
const sendMail = async () => {
  const info = await transporter.sendMail({
    from: '"Anisha Karki" <np05cp4a230070@iic.edu.np>',
    to: "nogepa5391@coderdir.com",
    subject: "Hello World!",
    // text: "Hello world?", 
    html: "Hello world?,<b>Hello world?</b>", 
  });

  console.log("Message sent:", info.messageId);
};
sendMail();

//export {sendMail}
