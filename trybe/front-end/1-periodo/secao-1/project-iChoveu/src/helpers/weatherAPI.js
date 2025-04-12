const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  try {
    const res = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`)
    const data = await res.json();
    if(data.length === 0) window.alert('Nenhuma cidade encontrada');
    
    return data;
  } catch (error) {
      return error.message;
  }
};

export const getWeatherByCity = async (cityURL) => {
  try {
    const URL_CIDADE = cityURL;
    const URL = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${URL_CIDADE}`;
  
    const res = await fetch(URL);
    const data = await res.json();

    return {
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      url: URL_CIDADE,
    } 
  } catch (error) {
    return error.message; 
  }
};
