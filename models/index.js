'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const models = require('../models');
const db = {};

const Order = require('./Order');
const OrderDetail = require('./OrderDetail');
const User = require('./User');
const Transaction = require('./Transaction');

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

Order.belongsToMany(models.User, {foreignKey: 'id_user',as: 'order',});
Order.belongsToMany(models.OrderDetail, {foreignKey: 'id_user',as: 'orderDetail',});
OrderDetail.hasMany(models.Katalog, {foreignKey: 'id_katalog',});
OrderDetail.belongsTo(models.Order, {foreignKey: 'id_order',as: 'order detail'});
OrderDetail.belongsTo(models.User, {foreignKey: 'id_order',as: 'order detail',through: 'Order'});
Transaction.hasOne(models.OrderDetail, {foreignKey: 'transactionId',});
Transaction.belongsTo(models.User, {foreignKey: 'id_user',as: 'transaction',});
User.hasMany(models.Order, {as: 'owner',through: 'OrderDetail',foreignKey: 'id_user'});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = {
  db,
  Order,
  OrderDetail,
  User,
  Transaction,
};
