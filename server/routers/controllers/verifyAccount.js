const jwt = require('jsonwebtoken');
const { SECRET, CLIENT_WEB_PATH } = require('../../config/env/env');
const db = require('../../config/db/db');
const { tblEmailTokens, tblUsers } = db;

module.exports = {
  verifyAccount: async (req, res) => {
    const strEmailToken = req.params.strEmailToken;

    const decode = jwt.verify(strEmailToken, SECRET);
    if (!decode) {
      res.status(404);
      res.json('invalid Email Token');
      return;
    }
    const strUserID = decode.userId;

    const validToken = await tblEmailTokens.findOne({
      where: { strEmailToken: strEmailToken, strUserID: strUserID },
    });
    if (validToken) {
      await tblUsers.update(
        { is_active: true },
        {
          where: {
            user_id: strUserID,
          },
        }
      );
      res.send(`<script>window.location.href="${CLIENT_WEB_PATH}/verifyAccount"</script>`);
    } else {
      res.status(404);
      res.json('invalid Email Token');
    }
  },
};
