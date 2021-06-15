function Navbar() {
  return (
    <div className="NavBody">
        <div style={{marginLeft: 10}}>Home</div>
      <div>
          <form style={{marginRight: 10}}>
            <input type="date" />
            <button>Search</button>
          </form>
      </div>
    </div>
  )
}

export default Navbar;