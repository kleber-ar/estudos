module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define(
    'Surgery',
    {
      surgeryId: { type: DataTypes.INTEGER, primaryKey: true },
      specialty: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'surgeries',
      underscored: true,
    },
  );

  return Surgery;
};
