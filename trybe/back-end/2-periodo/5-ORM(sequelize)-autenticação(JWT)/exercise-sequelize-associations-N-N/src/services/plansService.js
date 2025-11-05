const { Patient, Plan } = require('../models');

const getAllPlans = async (planId) => {
  const listOfPlans = await Plan.findAll({
    where: { planId },
    include: [{ model: Patient, as: 'patients' }],
  });

  if (!listOfPlans.length) {
    return ({ message: 'Nenhum plano encontrado' });
  }

  return listOfPlans;
};

module.exports = {
  getAllPlans,
};
