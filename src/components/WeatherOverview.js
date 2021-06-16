import { useState, useEffect } from 'react'

function WeatherOverview({sol, week}) {

  const day2 = () => {
    if (week.length > 0) {
      return <div>{week[0].sol}</div>
    } else {
      return  null
    }
  }
  console.log(week)
    // get sol of current url
  //fetch last 6 days (sol.sol - 6?)
 

 
  return (
    <div>
      <div className="Weather">
        <header>Mars weather for {sol.terrestrial_date?.slice(0,10) || " "}</header>
        {/* {sol === undefined ? <div>Empty</div> : <div>{sol.status}</div>} */}
        <p>Today's high is {(sol.max_temp *1.8 +32).toFixed(2)}°F </p>
        <p>Today's low is {(sol.min_temp *1.8 +32).toFixed(2)}°F </p>

  </div>
  <div className="Boxes">
    {day2()}
    <div>Day3</div>
    <div>Day4</div>
    <div>Day5</div>
    <div>Day6</div>
  </div>

</div>
  )
}
// ping for most recent
// grab that objects sol 
// ping the last 7 days

export default WeatherOverview;