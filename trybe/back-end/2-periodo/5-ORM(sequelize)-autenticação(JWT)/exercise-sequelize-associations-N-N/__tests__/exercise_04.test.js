const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists,
  checkThroughAssociation,
} = require('./assets/helper');
const { requirements } = require('../.trybe/requirements.json');

describe(requirements[3].description, () => {
  const modelPath = resolve(__dirname, '..', 'src', 'models', 'PatientSurgery.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('PatientSurgery');

  checkPropertyExists(modelPath)(["patient_id","surgery_id"]);
  checkThroughAssociation(modelPath)(
      ['Patient', 'Surgery']
    )('belongsToMany')(
      ['Surgery', 'Patient']
    )
});