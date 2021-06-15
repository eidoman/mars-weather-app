import logo from './logo.svg';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './Home.css';
import ContextProvider from './components/ContextProvider';
import Navbar from './components/Navbar'
import WeatherOverview from './components/WeatherOverview'

function Home() {
  const days = {
    day1: {"status":200,"id":2988,"terrestrial_date":"2021-06-09T00:00:00.000Z","ls":56,"season":"Month 2","min_temp":-79,"max_temp":-21,"pressure":874,"pressure_string":"Higher","abs_humidity":null,"wind_speed":null,"atmo_opacity":"Sunny","sunrise":"06:07","sunset":"17:53","local_uv_irradiance_index":"Moderate","min_gts_temp":-87,"max_gts_temp":-7,"wind_direction":null,"sol":3143,"unitOfMeasure":"Celsius","TZ_Data":"America/Port_of_Spain"},
    day2: {"status":200,"id":2991,"terrestrial_date":"2021-06-08T00:00:00.000Z","ls":55,"season":"Month 2","min_temp":-79,"max_temp":-21,"pressure":874,"pressure_string":"Higher","abs_humidity":null,"wind_speed":null,"atmo_opacity":"Sunny","sunrise":"06:08","sunset":"17:53","local_uv_irradiance_index":"Moderate","min_gts_temp":-87,"max_gts_temp":-9,"wind_direction":null,"sol":3142,"unitOfMeasure":"Celsius","TZ_Data":"America/Port_of_Spain"},
    day3: {"status":200,"id":2993,"terrestrial_date":"2021-06-07T00:00:00.000Z","ls":55,"season":"Month 2","min_temp":-79,"max_temp":-28,"pressure":874,"pressure_string":"Higher","abs_humidity":null,"wind_speed":null,"atmo_opacity":"Sunny","sunrise":"06:08","sunset":"17:54","local_uv_irradiance_index":"Moderate","min_gts_temp":-88,"max_gts_temp":-9,"wind_direction":null,"sol":3141,"unitOfMeasure":"Celsius","TZ_Data":"America/Port_of_Spain"},
    day4: {"status":200,"id":2987,"terrestrial_date":"2021-06-06T00:00:00.000Z","ls":54,"season":"Month 2","min_temp":-80,"max_temp":-23,"pressure":873,"pressure_string":"Higher","abs_humidity":null,"wind_speed":null,"atmo_opacity":"Sunny","sunrise":"06:08","sunset":"17:54","local_uv_irradiance_index":"Moderate","min_gts_temp":-82,"max_gts_temp":-3,"wind_direction":null,"sol":3140,"unitOfMeasure":"Celsius","TZ_Data":"America/Port_of_Spain"},
    day5: {"status":200,"id":2989,"terrestrial_date":"2021-06-05T00:00:00.000Z","ls":54,"season":"Month 2","min_temp":-80,"max_temp":-22,"pressure":873,"pressure_string":"Higher","abs_humidity":null,"wind_speed":null,"atmo_opacity":"Sunny","sunrise":"06:08","sunset":"17:54","local_uv_irradiance_index":"Moderate","min_gts_temp":-82,"max_gts_temp":-16,"wind_direction":null,"sol":3139,"unitOfMeasure":"Celsius","TZ_Data":"America/Port_of_Spain"},
    day6: {"status":200,"id":2992,"terrestrial_date":"2021-06-04T00:00:00.000Z","ls":54,"season":"Month 2","min_temp":-79,"max_temp":-26,"pressure":874,"pressure_string":"Higher","abs_humidity":null,"wind_speed":null,"atmo_opacity":"Sunny","sunrise":"06:09","sunset":"17:55","local_uv_irradiance_index":"Moderate","min_gts_temp":-84,"max_gts_temp":-8,"wind_direction":null,"sol":3138,"unitOfMeasure":"Celsius","TZ_Data":"America/Port_of_Spain"},
    day7: {"status":200,"id":2990,"terrestrial_date":"2021-06-03T00:00:00.000Z","ls":53,"season":"Month 2","min_temp":-78,"max_temp":-28,"pressure":873,"pressure_string":"Higher","abs_humidity":null,"wind_speed":null,"atmo_opacity":"Sunny","sunrise":"06:09","sunset":"17:55","local_uv_irradiance_index":"Moderate","min_gts_temp":-83,"max_gts_temp":-14,"wind_direction":null,"sol":3137,"unitOfMeasure":"Celsius","TZ_Data":"America/Port_of_Spain"},
  }

  const [sol, setSol] = useState({})
  // const apiKey = ""
  // const demoKey = "DEMO_KEY"
  // let url = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`
  const url2 = "https://api.maas2.apollorion.com/3141"
  

  // Use for final presentation.
  // useEffect(() => {
  //   async function fetchData(url){
  //     await fetch(url)
  //      .then(response => response.json())
  //      .then(json => setSol(json))
  //   }
  //   fetchData(url2)
  // }, [])
  
  return (
    <Router>
      <Navbar />

      <Switch>
        {/* <ContextProvider.Provider value={days}> */}
          <WeatherOverview days={days} />
        {/* </ContextProvider.Provider> */}
      </Switch>
   </Router>
    );
}

export default Home;
