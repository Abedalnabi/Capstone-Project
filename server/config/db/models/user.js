const { tblUserAssociations } = require('./associations/associations');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fullName: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    birthDate: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        min: 1,
        max: 30,
      },
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  tblUserAssociations(sequelize, DataTypes);

  return Users;
};
