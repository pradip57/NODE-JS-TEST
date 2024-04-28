require('dotenv').config()
const bcrypt = require("bcryptjs");
const mailServ = require("../../services/mail.service");

class AuthController {
  register = async (req, res, next) => {
    try {
      const payload = req.body;

      payload.password = bcrypt.hashSync(payload.password, 10);
      payload.status = "inactive";

      if (req.file) {
        payload.file = req.file.filename;
      }

      const registeredData = {
        ...payload,
        _id: "123",
      };

      await mailServ.sendEmail(
        registeredData.email,
        "Activate your account",
        `Dear ${registeredData.name} <br/>
        <p>You have registered your account with username <strong>${registeredData.email}</strong></p>
        <p>Please click the link below or copy and paste in browser to activate your account</p>
        <a href = "${process.env.FRONTEND_URL}/activate/${registeredData.activationToken}">
        ${process.env.FRONTEND_URL}/activate/${registeredData.activationToken}
        </a><br/>
        <p>Regards,</p>
        <p>${process.env.SMTP_FROM}</p>
        <p><small><em>Please do not reply to this email via any mail service.</em></small></p>
        `
      );

      res.json({
        result: payload,
        message: "Register Success",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
}

const authCtrl = new AuthController();
module.exports = authCtrl;
