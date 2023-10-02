import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  //위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치: ", lat, lon);
      callApi(lat, lon);
    });
  };
  //api 호출
  const callApi = async (lat, lon) => {
    try {
      const API_KEY = process.env.REACT_APP_WEATHER_KEY;
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      setData(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  //앱 접속 시, 한 번만 요청
  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>{data.name}</div>
          <div>{data.main.temp - 273.15}</div>
        </div>
      )}
    </div>
  );
}

export default App;
