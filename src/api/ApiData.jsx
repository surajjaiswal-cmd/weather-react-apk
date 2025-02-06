import axios from "axios";

let api = axios.create({
  baseURL: "https://api.openweathermap.org",
});

export const getPost = async (city) => {
  if (!city) {
    throw new Error("City name is required");
  }
  try {
    let res = await api.get(
      `/data/2.5/weather?q=${city}&appid=153c307bfc4f2e128f0c62711c9f84a4&units=metric`
    );
    return res.status === 200 ? res.data : {};
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

// Note: The API link provided ('https://openweathermap.org/current') may not be working due to API call limits. 
// To use the API, create an account on the OpenWeatherMap website and replace the API link or `appid` with your own credentials.