import '../App.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
     return (
          <>
               <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                         {/* <a className="navbar-brand" href="/">{props.title}</a> */}
                         <Link className="navbar-brand" to="/">{props.title}</Link>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                   <li className="nav-item">
                                        {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                                        <Link className="nav-link" to="/">Home</Link>
                                   </li>
                                   <li className="nav-item">
                                        {/* <a className="nav-link" href="/">Link</a> */}
                                        <Link className="nav-link" to="/MathOpp">MathOpp</Link>
                                   </li>
                              </ul>

                              {/* <div className='mx-2'>
                                   <button className="btn btn-danger mx-1" type="button" onClick={()=>{ props.changeColor('red') }}>Red</button>
                                   <button className="btn btn-success mx-1" type="button" onClick={()=>{ props.changeColor('green') }}>Green</button>
                                   <button className="btn btn-primary mx-1" type="button" onClick={()=>{ props.changeColor('blue') }}>Blue</button>
                              </div> */}

                              <div className="form-check form-switch">
                                   

                                   <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode} />
                                   <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="switchCheckDefault">Enable {props.mode === 'dark' ? 'light' : 'dark'} mode</label>
                              </div>
                         </div>
                    </div>
               </nav>
          </>
     )
}


Navbar.propTypes = {
     title: PropTypes.string.isRequired,
     dropdown: PropTypes.string.isRequired,
     dropdownaction: PropTypes.shape({
          action1: PropTypes.string.isRequired,
          action2: PropTypes.string.isRequired,
          action3: PropTypes.string.isRequired,
          logState: PropTypes.string.isRequired
     })
}
