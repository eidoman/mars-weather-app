function Navbar({sol}) {
  function handle(e){
    document.getElementById("date").value = e.target.value;
    console.log(e.target.value * 1.0275)
  }
  return (
    <div className="NavBody">
        <div style={{marginLeft: 10}}>Home</div>
      <div>
          <form  style={{marginRight: 10}}>
            {/* add initialDate as the value for the calendar to show current date on page load */}
            <input id="date" type="date" onChange={handle} />
          </form>
      </div>
    </div>
  )
}

//click on desired date
//switch display is changed to SearchDate page
//convert earth date to sol date <---
//make fetch call
//displays detailed info

export default Navbar;
