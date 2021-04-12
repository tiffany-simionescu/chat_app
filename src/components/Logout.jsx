const Logout = () => {

  const handleClick = (event) => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div style={{ height: '5vh', backgroundColor: '#CABCDC' }}>
      <button className="logout" onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Logout;