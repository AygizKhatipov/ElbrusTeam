'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    
    static associate(models) {
      this.hasMany(models.UserEvent, {
        foreignKey: "eventId"
      })
    }
  }
  Event.init({
    date: DataTypes.DATE,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    pic: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};