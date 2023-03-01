const { tblPostAssociations } = require('./associations/associations');

module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    post_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    post: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  tblPostAssociations(sequelize, DataTypes);

  return Posts;
};
