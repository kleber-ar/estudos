const service = require('../services/surgeriesService');

const getDoctorSurgeries = async (req, res) => {
  const { name } = req.params;
  try {
    const listOfPatients = await service.getDoctorSurgeries(name);

    if (listOfPatients.message) return res.status(404).send(listOfPatients);

    return res.status(200).json(listOfPatients);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getDoctorSurgeries,
};
