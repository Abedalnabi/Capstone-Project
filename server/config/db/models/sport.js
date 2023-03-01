module.exports = (sequelize, DataTypes) => {
  const Sports = sequelize.define('Sports', {
    sport_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });
  return Sports;
};
