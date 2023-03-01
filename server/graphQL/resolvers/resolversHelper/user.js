const bcrypt = require('bcrypt');
const db = require('../../../config/db/db');
const { sendEmail } = require('../../../middleware/sendEmail');
const { generateToken } = require('../../../middleware/auth');
const { tblEmailTokens } = db;
const { SERVER_PATH } = require('../../../config/env/env');

module.exports = {
  hashPasswordFun: async (password) => {
    const hashPassword = await bcrypt.hash(password, 10);
    return hashPassword;
  },

  comparePassword: async (password, hashPassword) => {
    const validPassword = await bcrypt.compare(password, hashPassword);
    return validPassword;
  },

  sendVerifyLink: async (email, newUserInfo) => {
    const strEmailToken = generateToken(newUserInfo);
    const verifyEndpoint = `${SERVER_PATH}/verify/${strEmailToken}`;
    sendEmail(email, verifyEndpoint);
    await tblEmailTokens.create({
      strEmailToken,
      strUserID: newUserInfo.user_id,
    });
  },
};
