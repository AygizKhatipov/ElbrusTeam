'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGroup extends Model {
  
    static associate(models) {
      this.belongsTo(models.Group, {
        foreignKey: "groupId"
      }),
      this.belongsTo(models.Phase, {
        foreignKey: "phaseId"
      }),
      this.belongsTo(models.Status, {
        foreignKey: "statusId"
      }),
      this.belongsTo(models.User, {
        foreignKey: "userId"
      })
    }
  }
  UserGroup.init({
    beginning: DataTypes.DATE,
    ending: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER,
    phaseId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserGroup',
  });
  return UserGroup;
};