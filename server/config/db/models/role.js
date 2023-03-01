module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    role_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    role: {
      type: DataTypes.STRING,
    },
  });
  return Roles;
};
