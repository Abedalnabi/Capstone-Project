const Sequelize = require('sequelize');
const db = require('../../config/db/db');
const { tblUsers } = db;
const { Op } = Sequelize;
const { generateToken } = require('../../middleware/auth');
const { hashPasswordFun, comparePassword } = require('./resolversHelper/user');
const { sendVerifyLink } = require('./resolversHelper/user');

module.exports = {
  getUserByID: async (args) => {
    const userId = args.userID;
    try {
      const userTarget = await tblUsers.findOne({
        where: { user_id: userId },
      });
      if (!userTarget) throw new Error('User did not exists');
      if (userTarget.sport_id) {
        const { dataValues } = await userTarget.getSport();
        userTarget.sport = dataValues;
      }
      return userTarget;
    } catch (err) {
      throw new Error(err);
    }
  },

  loginUser: async (args) => {
    const { email, password } = args;

    try {
      const userInfo = await tblUsers.findOne({
        where: { email: { [Op.like]: email } },
      });
      if (!userInfo) throw new Error('Email does not exist');
      const validPassword = await comparePassword(password, userInfo.password);

      if (!validPassword) throw new Error("Password you've entered is incorrect");
      else {
        if (!userInfo.is_active) throw new Error('your account not active , check your email and click on the link');
        const token = generateToken(userInfo.dataValues);
        return token;
      }
    } catch (err) {
      throw new Error(err);
    }
  },

  addUser: async (args) => {
    const { fullName, image, email, password, birthDate, sport_id, role_id } = args.userInput;
    const hashPassword = await hashPasswordFun(password);
    const emailAfterLowercase = email.toLowerCase();

    try {
      const [user, created] = await tblUsers.findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          fullName,
          image,
          email: emailAfterLowercase,
          birthDate,
          password: hashPassword,
          sport_id,
          role_id,
        },
      });
      if (!created) throw new Error('email  Already Exist');

      const newUserInfo = user.dataValues;

      /* The below function send a verify link to newUser's Email to active his account,
        and add token to tblEmailToken with related userID */
      await sendVerifyLink(email, newUserInfo);

      return newUserInfo;
    } catch (err) {
      throw new Error(err);
    }
  },

  updateUser: async (args) => {
    try {
      const { user_id, fullName, image, email, birthDate, password } = args.userInput;

      const hashPassword = await hashPasswordFun(password);
      const emailAfterLowercase = email.toLowerCase();

      const [isUserUpdated] = await tblUsers.update(
        {
          fullName,
          image,
          email: emailAfterLowercase,
          birthDate,
          password: hashPassword,
        },
        {
          where: {
            user_id,
          },
        }
      );
      if (!isUserUpdated) throw new Error('user did not updated');
      return args.userInput;
    } catch (err) {
      throw new Error(err);
    }
  },

  deleteUser: async (args) => {
    const userID = args.userID;
    try {
      const userTargetToDelete = await tblUsers.findOne({
        where: { user_id: userID },
      });
      if (!userTargetToDelete) throw new Error('User did not exist to delete, please add a valid UserID');
      await tblUsers.destroy({
        where: {
          user_id: userID,
        },
      });
      return `User deleted successfully`;
    } catch (err) {
      throw new Error(err);
    }
  },

  updateUserStatus: async (args) => {
    const { userID, is_active } = args;
    try {
      const [isUserUpdated] = await tblUsers.update(
        {
          is_active,
        },
        {
          where: {
            userID,
          },
        }
      );
      if (!isUserUpdated) throw new Error('user status did not updated');
      return args;
    } catch (err) {
      throw new Error(err);
    }
  },
};
