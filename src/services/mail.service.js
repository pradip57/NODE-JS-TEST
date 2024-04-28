require("dotenv").config();
const nodemailer = require("nodemailer");

class MailServices {
  transport;
  constructor() {
    try {
      this.transport = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        auth: {
          user: SMTP_USERNAME,
          pass: SMTP_PASSWORD,
        }
      });
    } catch (exception) {
      console.log(exception);
      throw new Error("Error connecting email services");
    }
  }

  
}

const mailServ = new MailServices();
module.exports = mailServ;
