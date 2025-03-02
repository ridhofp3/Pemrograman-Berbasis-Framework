export default async function handler(req, res) {
    const API_KEY = "OPENWEATHERMAP_API_KEY"; // Ganti dengan API key yang sebenarnya (tidak ingin melanjutkan ke payment)
    const city = "Malang"; 
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const weatherData = await weatherRes.json();
  
    res.status(200).json(weatherData);
  }