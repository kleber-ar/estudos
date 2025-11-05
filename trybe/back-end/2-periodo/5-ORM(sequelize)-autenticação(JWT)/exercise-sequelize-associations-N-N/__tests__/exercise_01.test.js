const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists 
} = require('./assets/helper');
const { requirements } = require('../.trybe/requirements.json');

describe(requirements[0].description, () => {
  const modelPath = resolve(__dirname, '..', 'src', 'models', 'Plan.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('Plan');

  checkPropertyExists(modelPath)(["plan_id","coverage", "price"]);
});