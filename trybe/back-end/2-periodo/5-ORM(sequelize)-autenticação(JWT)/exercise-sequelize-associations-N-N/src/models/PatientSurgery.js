module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define(
    'PatientSurgery',
    {
      patientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      surgeryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'patient_surgeries',
    }
  );

  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgery,
      foreignKey: 'surgeryId',
      otherKey: 'patientId',
    });
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patientId',
      otherKey: 'surgeryId',
    });
  };

  return PatientSurgery;
};
