import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './Home.css';
import ContextProvider from './components/ContextProvider';
import Navbar from './components/Navbar'
import WeatherOverview from './components/WeatherOverview'

function Home() {
  const [sol, setSol] = useState({})
  const [week, setWeek] = useState([])
  // const apiKey = ""
  // const demoKey = "DEMO_KEY"
  // let url = https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0
  const url = "https://api.maas2.apollorion.com/"

  useEffect(() => {
    async function fetchData(url){
      await fetch(url)
       .then(response => response.json())
       .then(json => setSol(json))
    }
    fetchData(url)
  }, [])

  //This works, don't change.
  useEffect(() => {
    async function fetchWeek(url, sol) {
      await fetch(url)
      .then(response => response.json())
      .then(json => setWeek([...week, json]))
    }
    fetchWeek(${url}3000)
  }, [])

  return (
    <Router>
      <Navbar sol={sol} />
      <Switch>
        {/* <ContextProvider.Provider value={sol}> /}
          <WeatherOverview sol={sol} week={week}/>
        {/ </ContextProvider.Provider> */}
      </Switch>
   </Router>
    );
}

export default Home;