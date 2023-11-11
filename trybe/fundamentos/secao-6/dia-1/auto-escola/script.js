const validadeInfo = (name, age) => {
    if (!name || !age) {
        throw new Error("Dados necessários");
        
    } if (name = true && age < 18) {
        throw new Error("Ainda possui menor idade");
    }
}
    
const studentRegister = (name, age) => {
    // seu código aqui
    try {
     validadeInfo(name, age)
     return `${name}, Seja bem-vindo(a) à Autrybe!`;
            
    } catch (error) {
      return error.message;
    }
  };

  console.log( studentRegister('arthur', 120));