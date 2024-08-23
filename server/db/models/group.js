'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
   
    static associate(models) {
      this.hasMany(models.UserGroup, {
        foreignKey: "groupId"
      })
    }
  }
  Group.init({
    team: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};