const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/env/env');

module.exports = {
  generateToken: (userInfo) => {
    const payload = {
      userId: userInfo.user_id,
      roleId: userInfo.role_id,
      email: userInfo.email,
      isActive: userInfo.is_active,
    };
    const options = {
      expiresIn: '1d',
    };
    let token = jwt.sign(payload, SECRET, options);
    return token;
  },

  decodeToken: (req) => {
    let token;
    if (req.body.headers) {
      token = req.body.headers.authorization;
    }

    if (!token) {
      throw new Error('A token is required for authentication');
    }
    token = token.replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, SECRET);

      return decoded;
    } catch (err) {
      throw new Error('Invalid Token');
    }
  },
};
