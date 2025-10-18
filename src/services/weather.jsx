import axios from "axios";

export const fetchWeather = async (city) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
console.log("Weather API Key:", apiKey);
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error("Weather API error:", err.message);
    return null;
  }
};
