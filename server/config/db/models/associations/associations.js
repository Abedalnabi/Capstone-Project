module.exports = {

  tblUserAssociations: (sequelize, DataTypes) => {
    sequelize.models.Users.belongsTo(sequelize.models.Sports, {
      foreignKey: {
        name: 'sport_id',
        type: DataTypes.INTEGER,
      },
    });
    sequelize.models.Users.belongsTo(sequelize.models.Roles, {
      foreignKey: {
        name: 'role_id',
        type: DataTypes.INTEGER,
      },
    });
  },


  tblPostAssociations: (sequelize, DataTypes) => {
    sequelize.models.Posts.belongsTo(sequelize.models.Users, {
      foreignKey: {
        name: 'poster_id',
        type: DataTypes.INTEGER,
      },
    });
  },


  tblCommentAssociations: (sequelize, DataTypes) => {
    sequelize.models.Comments.belongsTo(sequelize.models.Posts, {
      foreignKey: {
        name: 'post_id',
        type: DataTypes.INTEGER,
      },
    });
    sequelize.models.Comments.belongsTo(sequelize.models.Users, {
      foreignKey: {
        name: 'commenter_id',
        type: DataTypes.INTEGER,
      },
    });
  },
};
