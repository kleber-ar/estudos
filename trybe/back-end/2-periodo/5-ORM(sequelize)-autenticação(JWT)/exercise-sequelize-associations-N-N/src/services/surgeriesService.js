const { Patient, Surgery } = require('../models');

const getDoctorSurgeries = async (doctor) => {
  const listOfSurgeries = await Surgery.findAll({
    where: { doctor },
    include: [{
      model: Patient,
      as: 'patients',
      through: { attributes: [] },
      attributes: { exclude: ['planId'] },
    }],
  });

  if (listOfSurgeries === null) {
    return ({ message: 'No plan found' });
  }

  return listOfSurgeries;
};

module.exports = {
  getDoctorSurgeries,
};
