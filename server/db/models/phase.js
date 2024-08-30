'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phase extends Model {
   
    static associate(models) {
      this.hasMany(models.UserGroup, {
        foreignKey: "phaseId"
      })
    }
  }
  Phase.init({
    phase: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Phase',
  });
  return Phase;
};