import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "a.chinedu07@gmail.com",
    pass: "fwrhwysyymmczndh",
  },
});

const mailOptions = {
  from: "a.chinedu07@gmail.com",
  to: "chinedu.a@gmail.com",
  subject: "Test email from Nodemailer",
  html: "Just testing nodemailer functionalities",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
    return console.log("Error sending message");
  }
  console.log("Email sent successfully:", info.response);
});
