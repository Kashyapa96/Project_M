import React from 'react';
import './offline.css'; // Import your CSS file for styling
import logoImage from '../images/logo.jpg';
import { Link } from 'react-router-dom';
import Node from '../images/nodes.png';
function Realtime() {
  return (
    <div className="container1">
      <div className="row">
        <div className="column">
        <img src={logoImage} alt="Logo" className="logoImage" />
        <span className="projectText">PROJECT M</span>
        </div>
      </div>

        <div className="row">
            <div className="column">
                <label htmlFor="imsi" className="labelWithStyle">IMSI :</label>
                    <div className="inputWithLabel">
                        <input id="imsi" type="text" placeholder="Enter the IMSI" />
                    </div>
            </div>
            <div className="alignButton">
                <button className="searchButton">Search</button>
            </div>
            <div className="column"></div>
            <div className="column"></div> 
            <div className="column alignButton">
              <Link to="/offline">
                <button className="offlineButton">OFFLINE mode</button>
              </Link>
            </div> 
        </div>

      <div className="row">
        <div className="column" id="int1">
          <div className="nodeContainer">
            <div>
              <img src={Node} alt='node' className='NodeL'></img>
              <div className="labelBelowImageL">
                <label className="labelWithStyleL">MME</label>
              </div>
            </div>
            <div>
              <img src={Node} alt='node' className='NodeR'></img>
              <div className="labelBelowImageR">
                <label className="labelWithStyleR">HSS</label>
              </div>
            </div>
          </div>
        </div>
        <div className="column" id="int1">
          <div className="nodeContainer">
            <div>
              <img src={Node} alt='node' className='NodeL'></img>
              <div className="labelBelowImageL">
                <label className="labelWithStyleL">MME</label>
              </div>
            </div>
            <div>
              <img src={Node} alt='node' className='NodeR'></img>
              <div className="labelBelowImageR">
                <label className="labelWithStyleR">SGW</label>
              </div>
            </div>
          </div>
        </div>
        <div className="column" id="int1">
          <div className="nodeContainer">
            <div>
              <img src={Node} alt='node' className='NodeL'></img>
              <div className="labelBelowImageL">
                <label className="labelWithStyleL">SGW</label>
              </div>
            </div>
            <div>
              <img src={Node} alt='node' className='NodeR'></img>
              <div className="labelBelowImageR">
                <label className="labelWithStyleR">PGW</label>
              </div>
            </div>
          </div>
        </div>
        <div className="column" id="int1">
          <div className="nodeContainer">
            <div>
              <img src={Node} alt='node' className='NodeL'></img>
              <div className="labelBelowImageL">
                <label className="labelWithStyleL">SGW</label>
              </div>
            </div>
            <div>
              <img src={Node} alt='node' className='NodeR'></img>
              <div className="labelBelowImageR">
                <label className="labelWithStyleR">HLR</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <input id="gpInterface" type="text" className="largeInput" />
        </div>
        <div className="column">
          <input id="s8Interface" type="text" className="largeInput"  />
        </div>
        <div className="column">
          <input id="grInterface" type="text" className="largeInput"  />
        </div>
        <div className="column">
          <input id="s6aInterface" type="text" className="largeInput"  />
        </div>
      </div>
   </div>
  );
}

export default Realtime;
