'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
  
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "fromId"
      }),
      this.belongsTo(models.User, {
        foreignKey: "toId"
      })
    }
  }
  Chat.init({
    message: DataTypes.STRING,
    fromId: DataTypes.INTEGER,
    toId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};
