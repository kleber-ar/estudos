const fs = require('fs/promises');

const readJsonData = async (path) => {
  const content = await fs.readFile(path, 'utf-8');

  return JSON.parse(content);
};

module.exports = readJsonData;
