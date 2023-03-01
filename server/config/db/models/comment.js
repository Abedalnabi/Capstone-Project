const { tblCommentAssociations } = require('./associations/associations');

module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    comment_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  tblCommentAssociations(sequelize, DataTypes);

  return Comments;
};
