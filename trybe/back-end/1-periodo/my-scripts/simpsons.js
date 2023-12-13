
const fs = require('fs').promises;

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));

  console.log('Maggie adc!');
  
}

async function addNelsonToFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);

  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

  console.log('Nelson adc!');

}

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));
  
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

  console.log('Familia criada!');

}

async function filterSimpsons() {
  const fileContent = await fs
   .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));

  console.log('Removido!');
}

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json','utf-8')
  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if(!chosenSimpson) {
    throw new Error('id não encontrado');
  }
  console.log(chosenSimpson);
  return chosenSimpson;
}

async function readAll() {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      
      const simpsons = JSON.parse(fileContent);
      const string = simpsons.map(({id,name}) => `${id} - ${name}`)
    
      string.forEach((string) => console.log(string));
    })
}


async function main() {
  //readAll();
  //getSimpsonById(3);
  //filterSimpsons();
  //createSimpsonsFamily();
  //addNelsonToFamily()
  replaceNelson();
}

main();