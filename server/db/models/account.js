'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "idUser",
      });
      this.hasMany(models.Point, {
        foreignKey: "userId"
      });
    }
  }

  Account.init({
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    photo: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    about: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Account',
  });



  return Account;
};
