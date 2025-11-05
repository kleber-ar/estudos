const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists 
} = require('./assets/helper');
const { requirements } = require('../.trybe/requirements.json');

describe(requirements[1].description, () => {
  const modelPath = resolve(__dirname, '..', 'src', 'models', 'Patient.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('Patient');

  checkPropertyExists(modelPath)(["patient_id","fullname", "plan_id"]);
});