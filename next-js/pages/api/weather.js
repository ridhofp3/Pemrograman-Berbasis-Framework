export default async function handler(req, res) {
    const API_KEY = "b0d4870a8896626ef01d6f16df5d1c43";
    const city = "Malang"; 
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const weatherData = await weatherRes.json();
  
    res.status(200).json(weatherData);
  }