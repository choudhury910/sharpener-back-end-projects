const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-compete1', 'root', 'vvvv', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
