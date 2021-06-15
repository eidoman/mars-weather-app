import { useContext } from 'react'

function WeatherOverview({days}){
  let weekArrayMin = []
  let weekArrayMax = []
  for (var day in days) {
    weekArrayMax.push(days[day].max_temp)
    weekArrayMin.push(days[day].min_temp)
  }
 console.log(weekArrayMax)

  return (
    <div className="Weather">
      <header>Mars weather for {days.day1.terrestrial_date.slice(0,10)}</header>
      {/* {sol === undefined ? <div>Empty</div> : <div>{sol.status}</div>} */}
      <p>Today's high is {(days.day1.max_temp *1.8 +32).toFixed(2)}°F </p>
      <p>Today's low is {(days.day1.min_temp *1.8 +32).toFixed(2)}°F </p>
      
      <div>{weekArrayMin.map(day => (
          <p>Today's low is {(day *1.8 +32).toFixed(2)}°F</p>
        ))}
      
      </div>

    </div>
  )
}
// ping for most recent
// grab that objects sol 
// ping the last 7 days

export default WeatherOverview;