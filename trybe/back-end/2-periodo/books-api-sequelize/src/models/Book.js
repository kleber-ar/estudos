const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    totalPages: DataTypes.INTEGER,
  },

  {
    timestamps: false,
    underscored: true,
  },
  
  );

  return Book;
};