import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee,faGlobe,faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faFacebookF, } from '@fortawesome/free-brands-svg-icons';

import logo from './logo.png';
import prize from './prize.png';
import pic from './pic.png';
import pipe from './pipe.png';





import './App.css';

function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <nav className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
     
      </header>
      <div className="gap"></div>
    </nav>

    <div className="left1">
    <img src={prize} className="left" alt="logo" />

    </div>
    <div className="right">
      <h> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h>
      <ul>
        <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
        <li>  C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
      </ul>
      <img src={pic} className="pic" alt="logo" />
      <p>Government of India has awarded the <span className="nap">"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>

    </div>
    <div className="pink"></div>
    <div className="paget">
      <p className="fix">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      <img src={pipe} className="you" alt="logo" />
      <p className="line">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
      <hr className="solid"></hr>
      <p className="line">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      <p className="lp">  CHEMICALS <span className="vl"></span>  PROCESS POWER WATER <span className="vl"></span> WASTE WATER OILS <span className="vl"></span> GAS PHARMA SUGARS  <span className="vl"></span>DISTILLERIES PAPER<span className="vl"></span>  PULP MARINE <span className="vl"></span> DEFENCE METAL <span className="vl"></span> MINING FOOD <span className="vl"></span> BEVERAGE PETROCHEMICAL <span className="vl"></span> REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span className="vl"></span> RESIDENTIAL</p>
    </div>
    <div className="last">
      <ul className="lat1">
        <li className = "last2"><FontAwesomeIcon icon={faPhoneSquareAlt} /><a>toll free:180-2000-1234</a></li>
        <li className = "last2"><FontAwesomeIcon icon={faFacebook} /><a >www.faceBook.com/Crigroups</a></li>
        <li className ="last2"><FontAwesomeIcon icon={faGlobe} /><a>www.crigroups.com</a></li>
        

      </ul>
    </div>
    
    </>
  );
}

export default App;
