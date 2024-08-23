'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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