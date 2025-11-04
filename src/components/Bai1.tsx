import React, { useState } from "react";
import axios from "axios";

interface WeatherCondition {
  temp_C: string;
  weatherDesc: { value: string }[];
}

interface WeatherData {
  current_condition: WeatherCondition[];
}

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    try {
      const res = await axios.get<WeatherData>(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data);
    } catch (error) {
      alert("Không tìm thấy thành phố hoặc lỗi khi lấy dữ liệu!");
    }
  };

  return (
    <div className="page-container">
      <h2>Ứng dụng thời tiết</h2>
      <input
        type="text"
        placeholder="Nhập tên thành phố..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Xem thời tiết</button>

      {weather && (
        <div>
          <h3>Thời tiết tại {city}</h3>
          <p>Nhiệt độ: {weather.current_condition[0].temp_C}°C</p>
          <p>Tình trạng: {weather.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
