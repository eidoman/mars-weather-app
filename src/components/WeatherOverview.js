import { useState, useEffect } from 'react'

function WeatherOverview({sol, url}) {
  const [week, setWeek] = useState([])
  const solDate = sol.sol
 
  useEffect(() => {
    async function fetchWeek(url){
      await fetch(url)
      .then(response => response.json())
      .then(json => setWeek([...week, json]))
    //  return { ...state, todos: [...state.todos, { name: payload }] };
  }
  function waitForElement(){
    if(typeof solDate !== "undefined"){
      console.log(solDate)
      fetchWeek(`${url}${solDate}`)
    } else{
      setTimeout(waitForElement, 250);
    }
  }
      waitForElement()
  }, [])


  console.log('week: ', week)
    // fetchWeek(`${url}${sol.sol-2}`)
    // fetchWeek(`${url}${sol.sol-3}`)
    // for(let i = 1; i < 3; i++){
      //   let date = sol.sol - i
      //   fetchWeek(`${url}${date}`)
      //   console.log("Date is ", date)
      // }

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
        {/* <div>{week}</div> */}
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