const express = require('express');
const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatient,
  getPatientsAndSurgeriesNoDoctor } = require('./controllers/patientsController');
const { getAllPlans } = require('./controllers/plansController');
const { getDoctorSurgeries } = require('./controllers/surgeriesController');

const app = express();
app.use(express.json());

// Não remova a linha abaixo, pois pode causar problema nos testes
app.get('/', (_req, res) => res.send('ok'));

app.get('/patients/plans', getAllPatientsPlans);
app.get('/patients/surgeries', getAllPatientsSurgeries);
app.post('/patients', createPatient);
app.get('/patients/surgeries/nodoctor', getPatientsAndSurgeriesNoDoctor);

app.get('/plans/:id', getAllPlans);

app.get('/surgeries/:name', getDoctorSurgeries);

module.exports = app;
