'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      // Связь один к одному с моделью User
      this.belongsTo(models.User, {
        foreignKey: "idUser",  // Связываем поле idUser с id в User
        
      });
      this.hasMany(models.Point, {
        foreignKey: "userId"
      });
    }
  }

  Account.init({
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,  // Делаем idUser первичным ключом
    },
    photo: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    about: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });

  return Account;
};
