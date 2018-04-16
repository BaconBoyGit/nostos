'use strict';
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Company', {
        location     : { type: DataTypes.STRING, allowNull: false },
        start        : { type: DataTypes.STRING,  },
        end          : { type: DataTypes.STRING,  },
        date         : { type: DataTypes.STRING,  },
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