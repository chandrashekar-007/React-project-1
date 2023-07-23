import React from 'react'
import propTypes from 'prop-types'

export default function Navbar(props){
    return(
        <>
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} `}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./components/About.js">
                    {props.about}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    {props.service}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact
                  </a>
                </li>
              </ul>
              <div className={`form-check form-switch pe-3 text-${props.mode==="dark"?"light":"dark"}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleSwitch}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  >Dark Blue Mode</label>
              </div>
              <div className={`form-check form-switch pe-3 text-${props.mode==="dark"?"light":"dark"}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleSwitch1}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  >Dark Orange Mode</label>
              </div>
              <div className={`form-check form-switch pe-3 text-${props.mode==="dark"?"light":"dark"}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleSwitch2}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  >Dark Red Mode</label>
              </div>
              <div className={`form-check form-switch pe-3 text-${props.mode==="dark"?"light":"dark"}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleSwitch3}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  >Dark Purple Mode</label>
              </div>
              <div className={`form-check form-switch pe-3 text-${props.mode==="dark"?"light":"dark"}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleSwitch4}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  >Dark Green Mode</label>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
};

Navbar.defaultProps = {
  title : "Reactjs Learning",
  service : "Services",
  about : "About"

}

Navbar.propTypes = {
  title : propTypes.string.isRequired,
  service : propTypes.string.isRequired,
  about : propTypes.string.isRequired
}