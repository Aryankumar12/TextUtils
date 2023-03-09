import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  const click = ()=>{
    console.log("you clcik")
    document.body.style.backgroundColor= 'green'
   
  }
  const click2= ()=>{
    document.body.style.backgroundColor= '#a55040'
  }
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.secondLink}</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className="btn btn-danger mx-1" onClick={click}>Change color</div>
        <div className="btn btn-success mx-2" onClick={click2}>Change color</div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
      </div>
    </div>
  </nav>
    </>
  )
}


Navbar.propTypes ={
    title:  PropTypes.string.isRequired,
    secondLink: PropTypes.string
}

Navbar.defaultProps={
    title:"Write title here",
    secondLink: "write second link"
}