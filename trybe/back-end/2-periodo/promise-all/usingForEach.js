const fs = require('fs').promises;

const files = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
]

const main = async () => {
  try {
    const promises = files.map(async (file, index) => {
      const contentFile = await fs.readFile(file, 'utf8');
      console.log(`file ${index + 1}: ${contentFile}`);
    });

    await Promise.all(promises);

    console.log("That's all folks");

  } catch (error) { 
    console.log(`Error ao ler o arquivo: ${error.message}`);
  }
};

const getFilesSizeSum = async () => {
  try {
    let filesSize = 0
    await Promise.all(files.map(async (file) => {
      const contentFile = await fs.readFile(file);
      filesSize = filesSize + contentFile.byteLength;
    }));

    const result = `Lidos ${files.length} arquivos somados o tamanho deles são ${filesSize} bytes`;
    
    return console.log(result);
  } catch (error) {
    console.log(`erro ao ler o arquivo: ${error.message}`);
  }
};

getFilesSizeSum()
main()

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });

const arrayToFile = async () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFiles = strings.map((string, index) => fs.writeFile(`./files${index + 1}.txt`, string));

  await Promise.all(createFiles);

  const fileNames = [
    'files1.txt',
    'files2.txt',
    'files3.txt',
    'files4.txt',
    'files5.txt',
  ];

  const readFile = fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'));

  const fileContents = await Promise.all(readFile);

  const newFileContent = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent);
};

arrayToFile()
