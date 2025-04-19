import axios from 'axios';
import { GET_WEATHER_URL } from '../constants/urls';
import { formatCityTime } from '../utils/utils';

export const getWeather = async (city) => {
  if (!city) {
    throw new Error("City name is required.");
  }

  try {
    const response = await axios.get(GET_WEATHER_URL, {
      params: {
        q: city,
        appid: 'e9a6231866e2f3adefe7f7cc5b2bc9cc',
        units: 'metric'
      },
    });

    if (response.status !== 200) {
      throw new Error();
    }

    return {
      main: response.data.weather[0].main,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      currentTemp: Math.floor(response.data.main.temp),
      maxTemp: Math.floor(response.data.main.temp_min),
      minTemp: Math.floor(response.data.main.temp_max),
      time: formatCityTime(response.data.dt)
    };
  } catch {
    throw new Error("Failed to fetch weather data. Please try again.");
  }
};
