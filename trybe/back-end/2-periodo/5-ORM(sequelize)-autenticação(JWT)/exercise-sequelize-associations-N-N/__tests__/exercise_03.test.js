const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists 
} = require('./assets/helper');
const { requirements } = require('../.trybe/requirements.json');

describe(requirements[2].description, () => {
  const modelPath = resolve(__dirname, '..', 'src', 'models', 'Surgery.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('Surgery');

  checkPropertyExists(modelPath)(["surgery_id","specialty", "doctor"]);
});