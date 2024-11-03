import nodeMailer from "nodemailer";

// export const sendEmail = async (options) => {
//   const transporter = nodeMailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     service: 'gmail',
//     secure: true,
//     auth: {
//       user: process.env.SMTP_MAIL,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMTP_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`,
//   };
//   await transporter.sendMail(mailOptions);
// };


export const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com", // Directly set the SMTP host
    port: 465, // Directly set the SMTP port
    secure: true, // Use secure connection
    auth: {
      user: "arslaankhurshiedsmt231@gmail.com", // Directly set the SMTP email
      pass: "lynt qxts xzzf acqz", // Directly set the SMTP password
    },
  });

  const mailOptions = {
    from: "arslaankhurshiedsmt231@gmail.com", // Directly set the sender email
    to: options.email,
    subject: options.subject,
    text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`,
  };
  
  await transporter.sendMail(mailOptions);
};

