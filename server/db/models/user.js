'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.UserGroup, {
        foreignKey: "userId"
      }),
      this.hasMany(models.DataBase, {
        foreignKey: "userId"
      }),
      this.hasMany(models.Chat, {
        foreignKey: "fromId"
      }),
      this.hasMany(models.Chat, {
        foreignKey: "toId"
      }),
      // Связь один к одному с моделью Account
      this.hasOne(models.Account, {
        foreignKey: "idUser"  // Указываем, что внешний ключ в Account это idUser
        
      });
      this.belongsTo(models.Role, {
        foreignKey: "roleId"
      });

    }
  }

  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isMember: DataTypes.BOOLEAN,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });

  // Хук, который создаст запись в Account автоматически после создания User
  User.addHook('afterCreate', async (user, options) => {
    await sequelize.models.Account.create({ idUser: user.id });
  });

  return User;
};
