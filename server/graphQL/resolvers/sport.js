const db = require('../../config/db/db');
const { tblSports, tblUsers } = db;

module.exports = {
  getAllSports: async () => {
    try {
      const sports = await tblSports.findAll();
      return sports;
    } catch (err) {
      throw new Error(err);
    }
  },
  getUserBySportID: async (args) => {
    const sportId = args.sportID;
    try {
      const userTarget = await tblUsers.findAll({
        where: { sport_id: sportId },
      });
      if (!userTarget) throw new Error('Gyms did not exists not valid sportID');

      return userTarget;
    } catch (err) {
      throw new Error(err);
    }
  },
};
