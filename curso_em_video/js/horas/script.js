function carregar(){
    let data = new Date()
    let hora = data.getHours()
    let msg1 = document.querySelector('#msg1')
    let msg2 = document.querySelector('#msg2')
    let img = document.querySelector('img')
    msg1.textContent = `Agora são ${hora}`;
    if (hora >= 6 && hora < 12 ) {
        msg2.innerHTML = '<strong>Bom dia!!<strong>';
        img.src = 'imgs/manha.jpeg';

    } else if (hora >= 12 && hora < 18){
        msg2.innerHTML = '<strong>Boa tarde!!<strong>';
        img.src = 'imgs/tarde.jpeg';

    } else if (hora >= 18 && hora < 24){
        msg2.innerHTML = '<strong>Boa noite!!<strong>';
        img.src = 'imgs/noite.jpeg';

    } else {
        msg2.innerHTML = '<strong>Boa madruga!!';
        img.src = 'imgs/madrugada.jpg';

    }

}