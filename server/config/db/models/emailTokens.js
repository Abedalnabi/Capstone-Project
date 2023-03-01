
module.exports = (sequelize, DataTypes) => {
  const EmailTokens = sequelize.define('EmailTokens', {
    intTokenID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    strEmailToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strUserID: {
      type: DataTypes.INTEGER,
    },
  });

  return EmailTokens;
};
