'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
   
    static associate(models) {
      this.belongsTo(models.Account, {
        foreignKey: "userId"
      });
    }
  }
  Point.init({
    point: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Point',
    
  });
  return Point;
};