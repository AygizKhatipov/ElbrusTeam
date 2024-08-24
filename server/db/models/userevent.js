'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserEvent extends Model {
    
    static associate(models) {
      this.belongsTo(models.Event, {
        foreignKey: "eventId"
      }),
      this.belongsTo(models.User, {
        foreignKey: "userId"
      }),

    }
  }
  UserEvent.init({
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserEvent',
  });
  return UserEvent;
};