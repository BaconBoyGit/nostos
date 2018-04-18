'use strict';
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Company', {
        location     : { type: DataTypes.STRING, allowNull: false },
        start        : { type: DataTypes.STRING, allowNull: false },
        end          : { type: DataTypes.STRING, allowNull: false },
        date         : { type: DataTypes.STRING, allowNull: false },
  });

  Model.associate = function(models){
      this.Users = this.belongsToMany(models.User, {through: 'UserCompany'});
  };

  Model.prototype.toWeb = function (pw) {
      let json = this.toJSON();
      return json;
  };

  return Model;
};