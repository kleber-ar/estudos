const { Patient, Plan, Surgery } = require('../models');

const getAllPatientsPlans = async () => {
  const listOfPatients = await Patient.findAll({ include: { model: Plan, as: 'plan' } });

  if (!listOfPatients.length) {
    return ({ message: 'Nenhum paciente encontrado' });
  }

  return listOfPatients;
};

const getAllPatientsSurgeries = async () => {
  const listOfPatients = await Patient.findAll({
    include: { model: Surgery, as: 'surgeries', through: { attributes: [] } },
  });
  if (!listOfPatients.length) {
    return ({ message: 'Nenhum paciente encontrado' });
  }

  return listOfPatients;
};

const createPatient = async (fullname, planId) => {
  const newPatient = await Patient.create({ fullname, planId });

  if (!newPatient) {
    return ({ message: 'Não foi possível criar um novo paciente' });
  }
  return newPatient;
};

const getPatientsAndSurgeriesNoDoctor = async () => {
  const listOfPatients = await Patient.findAll({
    include: {
      model: Surgery,
      as: 'surgeries',
      attributes: { exclude: ['doctor'] },
      through: { attributes: [] },
    },
    attributes: { exclude: ['planId'] },
  });
  if (listOfPatients === null) {
    return ({ message: 'Nenhum paciente encontrado' });
  }
  return listOfPatients;
};

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatient,
  getPatientsAndSurgeriesNoDoctor,
};
