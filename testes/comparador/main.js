function compararCodigos(...parametros) {
  
    console.log('Comparação dos códigos:');
    const posicoesComNumeros = [];
  
    for (let i = 0; i < parametros[0].length; i++) {
      const temNumero = parametros.every(codigo => !isNaN(codigo.charAt(i)));
  
      if (temNumero) {
        posicoesComNumeros.push(i + 1);
      }
    }
  
    console.log('----------------------');
    if (posicoesComNumeros.length === 0) {
      console.log('Nenhuma posição dos códigos contém números.');
    } else {
      console.log('As posições em que os códigos têm números são:');
      console.log(posicoesComNumeros);
    }
  }
  
  // Exemplo de uso:
  compararCodigos("1C27ZFZ9M8TK", "8B2KVGB5V5DJ", "OQ0GV2TRH7T3", "E91IKDZE58C0", "DF3APKJ0C5ZA");