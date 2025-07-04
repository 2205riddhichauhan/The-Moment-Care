
const SideBar = ({selectedTab , setSelectedTab}) => {

  return <div
  className="sidebar"
  style={{
    width: "280px",
    backgroundColor: "#D3D3D3",
    fontWeight: "500",
    height: "100%",
    overflowY: "auto",
    padding: "1rem",
    boxSizing: "border-box",
  }}
>
   
  <hr/>
  <ul className="nav nav-pills flex-column mb-auto" >
    <li className="nav-item" onClick={() => {setSelectedTab("Home")}}>
      <a href="#" className={`nav-link text-black btn btn-info ${selectedTab === 'Home' && 'info'}`} aria-current="page">
        <svg className="bi pe-none me-2  " width="16" height="16"><use xlinkHref="#home"></use></svg>
        Home
      </a>
    </li>
    <li onClick={() =>{setSelectedTab("Mother's Rulebook")}}>
      <a href="#" className={`nav-link text-black btn btn-info ${selectedTab === "Mother's Rulebook" && 'info'}`}>
        <svg className="bi pe-none " width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
        Mother's Rulebook
      </a>
    </li>
    <li onClick={()=>{setSelectedTab("Discover With Us")}}>
      <a href="#" className={`nav-link text-black btn btn-info ${selectedTab === 'Discover With Us' && 'info'}`}>
        <svg className="bi pe-none " width="16" height="16"><use xlinkHref="#table"></use></svg>
        Discover With Us
      </a>
    </li>
    <li onClick={()=>{setSelectedTab("Serene Sounds")}}>
      <a href="#" className={`nav-link text-black btn btn-info ${selectedTab === 'Serene Sounds' && 'info'}`}>
        <svg className="bi pe-none " width="16" height="16"><use xlinkHref="#grid"></use></svg>
      Serene Sounds
      </a>
    </li>
    <li onClick={()=>{setSelectedTab("Pragnancy Book-Shelf")}}>
      <a href="#" className={`nav-link text-black  btn btn-info ${selectedTab === 'Pragnancy Book-Shelf' && 'info'}`}>
        <svg className="bi pe-none " width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
        Pragnancy Book-Shelf
      </a>
    </li>
    <li onClick={()=>{setSelectedTab("MotherHood Guidance")}}>
      <a href="#" className={`nav-link text-black  btn btn-info ${selectedTab === 'MotherHood Guidance' && 'info'}`}>
        <svg className="bi pe-none " width="16" height="16" ><use xlinkHref="#people-circle"></use></svg>
        Mom Manual
      </a>
    </li>
    <li onClick={()=>{setSelectedTab("Carefully Prescribed")}}>
      <a href="#" className= {`nav-link text-black  btn btn-info ${ selectedTab === 'Carefully Prescribed' && 'info'}`}>
        <svg className="bi pe-none " width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
       Carefully Prescribed  {/*  pragnancy medicine */}
      </a>
    </li>
    <li onClick={()=>{setSelectedTab("Feedback")}}>
      <a href="#" className={`nav-link text-black btn btn-info ${selectedTab === 'Feedback' && 'info'}`}>
        <svg className="bi pe-none " width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
       Feedback  {/*  pragnancy medicine */}
      </a>
    </li>
    
  </ul>
  <hr/>
</div>
}

export default SideBar;

