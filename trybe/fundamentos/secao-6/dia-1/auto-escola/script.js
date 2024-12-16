const validadeInfo = (name, age) => {
  if (!name || !age) throw new Error("Todas as informaçoes são necessárias");

  if (age < 18) throw new Error("Too young");
};

const studentRegister = (name, age) => {
  try {
    validadeInfo(name, age);

    return `${name}, seja bem vindo!`;
  } catch (error) {
    return error.message;
  }
};

console.log(studentRegister("arthur", 120));

