const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "msjafri.ec@gmail.com",
    pass: "Shaj@0897",
  },
});

const emailSender = (email, username, password) => {
  const mailOptions = {
    from: "plankshaufan@gmail.com",
    to: email,
    subject: "Expertrons: Authentication Details",
    text: `Please use this details to login: username=${username}, password=${password}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = emailSender;
