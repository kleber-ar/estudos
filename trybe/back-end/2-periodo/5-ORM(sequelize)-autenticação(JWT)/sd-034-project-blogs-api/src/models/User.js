const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, { timestamps: false, underscored: true });

  return User;
};
