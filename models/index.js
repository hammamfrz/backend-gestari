'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

const { user, orders, orderDetail, transaction, Katalog } = sequelize.models;

orders.belongsToMany(user, { through: orderDetail, foreignKey: 'id_user' });
orders.belongsToMany(orderDetail, { through: orderDetail, foreignKey: 'id_order' });
orderDetail.belongsTo(transaction, { foreignKey: 'id_transaction' });
orderDetail.belongsTo(Katalog, { foreignKey: 'id_katalog' });
user.belongsToMany(orders, { through: orderDetail, foreignKey: 'id_user' });
transaction.belongsTo(user, { foreignKey: 'id_user' });
transaction.hasMany(orderDetail, { foreignKey: 'id_transaction' });
user.hasMany(transaction, { foreignKey: 'id_user' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;