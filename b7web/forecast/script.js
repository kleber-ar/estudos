document.querySelector('.busca').addEventListener('submit', async (event) => {
  event.preventDefault();

  const input = document.querySelector('#searchInput').value;

  if (input) {
    clear();
    warning('Carregando...');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=61235e4072da8b126a882470058b7002&units=metric&lang=pt_br`;

    const results = await fetch(url);
    const json = await results.json();

    if (json.cod === 200) {
      showInfo({
        name: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        tempIcon: json.weather[0].icon,
        windSpeed: json.wind.speed,
        windAngle: json.wind.deg,
      });
    } else {
      clear();
      warning('Não encontramos esta localização.');
    }

  }
})

function showInfo(json) {
  warning('');

  document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
  document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
  document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;

  document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);

  document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`;

  document.querySelector('.resultado').style.display = 'block';

}

function clear() {
  warning('');
  document.querySelector('.resultado').style.display = 'none';
}

function warning(msg) {
  document.querySelector('.aviso').innerHTML = msg;
}
