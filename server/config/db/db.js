const Sequelize = require('sequelize');

const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
  DB_NAME,
} = require('../env/env');

const db = {};

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  define: {
    paranoid: true,
    timestamps: true,
    updatedAt: false,
    createdAt: false,
    freezeTableName: true,
  },
});

db.sequelize = sequelize;
db.tblSports = require('./models/sport')(sequelize, Sequelize);
db.tblRoles = require('./models/role')(sequelize, Sequelize);
db.tblUsers = require('./models/user')(sequelize, Sequelize);
db.tblPosts = require('./models/post')(sequelize, Sequelize);
db.tblComments = require('./models/comment')(sequelize, Sequelize);
db.tblEmailTokens = require('./models/emailTokens')(sequelize, Sequelize);



// create tables if not exists
sequelize.sync().then(() => {
  console.log('Tables created');
});

module.exports = db;
