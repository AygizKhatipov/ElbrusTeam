'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataBase extends Model {
   
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId"
      })
    }
  }
  DataBase.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    article: DataTypes.TEXT,
    pic: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DataBase',
  });
  return DataBase;
};