import React, {useEffect, useState} from 'react';
import './offline.css'; // Import your CSS file for styling
import logoImage from '../images/logo.jpg';
import { Link } from 'react-router-dom';
import Node from '../images/nodes.png';
import io from 'socket.io-client';

function Realtime() {
  const [socket, setSocket] = useState(null);

  
  
  // const [gtpCPackets, displayGTPCPackets] = useState([]);
  // const [udpPackets, displayGTPUPackets] = useState([]);
  // const [diameterPackets, displayDiameterPackets] = useState([]);
  // const [mapPackets, displayMAPPackets] = useState([]);
  // const [imsi, setImsi] = useState('');
  // function sendIMSI() {
  //   if (socket1 && imsi) {
  //     socket1.emit('imsi_value', { imsi });
  //   }
  // }
  
  useEffect(() => {
    const newSocket = io('http://172.19.10.22:3000');

    function displayGTPCPackets(gtpCPackets) {
      const container = document.getElementById('gtpv2_packets');
      if (gtpCPackets != null) {
        displayPacketgtpc(container, 'GTP C Packets', gtpCPackets);
      }
  }
  
  function displayDiameterPackets(diameterPackets) {
      const container = document.getElementById('diameter_packets');
      displayPacketgtpudiameter(container, 'Diameter Packets', diameterPackets);
  }
  
  function displayMAPPackets(mapPackets) {
      const container = document.getElementById('ip_packets');
      displayPacketmap(container, 'MAP Packets', mapPackets);
  }
  
  function displayGTPUPackets(gtpUPackets) {
      const container = document.getElementById('udp_packets');
      displayPacketgtpu(container, 'GTP U Packets', gtpUPackets);
  }

    newSocket.on('connect', () => {
      console.log('Connected to server');
    });

    newSocket.on('captured_packet', function(packet) {
      displayGTPCPackets(packet.gtp_c);
      displayGTPUPackets(packet.gtp_u);
      displayDiameterPackets(packet.diameter);
      displayMAPPackets(packet.map);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  function SendIMSI() {
    const imsiInput = document.getElementById('imsiInput');
    if (socket && imsiInput) {
      const imsi = imsiInput.value;
      socket.emit('imsi_value', { imsi });
    }
  }

//   function displayGTPCPackets(gtpCPackets) {
//     const container = document.getElementById('gtpv2_packets');
//     if (gtpCPackets != null) {
//       displayPacketgtpc(container, 'GTP C Packets', gtpCPackets);
//     }
// }

// function displayDiameterPackets(diameterPackets) {
//     const container = document.getElementById('diameter_packets');
//     displayPacketgtpudiameter(container, 'Diameter Packets', diameterPackets);
// }

// function displayMAPPackets(mapPackets) {
//     const container = document.getElementById('ip_packets');
//     displayPacketmap(container, 'MAP Packets', mapPackets);
// }

// function displayGTPUPackets(gtpUPackets) {
//     const container = document.getElementById('udp_packets');
//     displayPacketgtpu(container, 'GTP U Packets', gtpUPackets);
// }

function displayPacketgtpc(container, title, packetData) {
  const gtpCPackets = packetData.gtp_c;

  if (gtpCPackets && gtpCPackets.length > 0) {
      const gtpMessage = gtpCPackets[0]._source.layers.gtpv2["gtpv2.message_type"];

      const packetContent = document.createElement('pre');
      packetContent.textContent = JSON.stringify(gtpCPackets, null, 2);
      packetContent.style.display = 'none';

      const packetHeader = document.createElement('h3');
      packetHeader.textContent = `GTP Message Type: ${gtpMessage}`;

      if (gtpMessage === "32") {
          packetHeader.classList.add('left-align');
          container.appendChild(packetHeader);
          container.appendChild(packetContent);
      } else {
          packetHeader.classList.add('right-align');
          const wrapperDiv = document.createElement('div');
          wrapperDiv.appendChild(packetHeader);
          wrapperDiv.appendChild(packetContent);
          container.appendChild(wrapperDiv);
      }

      packetHeader.addEventListener('click', function() {
          if (packetContent.style.display === 'none') {
              packetContent.style.display = 'block';
              packetContent.style.fontFamily = 'Arial, sans-serif';
              packetContent.style.fontSize = '10px';
              packetContent.style.color = '#333';
          } else {
              packetContent.style.display = 'none';
          }
      });
  }
}

function displayPacketgtpu(container, title, packetData) {
  const packetHeader = document.createElement('h3');
  packetHeader.textContent = title;
  container.appendChild(packetHeader);

  const packetContent = document.createElement('pre');
  packetContent.textContent = JSON.stringify(packetData, null, 2);
  packetContent.style.display = 'none';
  container.appendChild(packetContent);

  packetHeader.addEventListener('click', function() {
      if (packetContent.style.display === 'none') {
          packetContent.style.display = 'block';
      } else {
          packetContent.style.display = 'none';
      }
  });
}

function displayPacketmap(container, title, packetData) {
  const packetHeader = document.createElement('h3');
  packetHeader.textContent = title;
  container.appendChild(packetHeader);

  const packetContent = document.createElement('pre');
  packetContent.textContent = JSON.stringify(packetData, null, 2);
  packetContent.style.display = 'none';
  container.appendChild(packetContent);

  packetHeader.addEventListener('click', function() {
      if (packetContent.style.display === 'none') {
          packetContent.style.display = 'block';
      } else {
          packetContent.style.display = 'none';
      }
  });
}

function displayPacketgtpudiameter(container, title, packetData) {
  const packetHeader = document.createElement('h3');
  packetHeader.textContent = title;
  container.appendChild(packetHeader);

  const packetContent = document.createElement('pre');
  packetContent.textContent = JSON.stringify(packetData, null, 2);
  packetContent.style.display = 'none';
  container.appendChild(packetContent);

  packetHeader.addEventListener('click', function() {
      if (packetContent.style.display === 'none') {
          packetContent.style.display = 'block';
      } else {
          packetContent.style.display = 'none';
      }
  });
}

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
                        <input id="imsiInput" type="text" placeholder="Enter the IMSI" />   
                    </div>
            </div>
            <div className="alignButton">
            <button onClick={SendIMSI} className="searchButton">Search</button>
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
          {/* <div className="packet-box"> */}
          <pre id="gtpv2_packets"></pre>
          {/* </div> */}
        </div>
        <div className="column">
          <pre id="udp_packets"></pre>
        </div>
        <div className="column">
          <pre id="diameter_packets"></pre>
        </div>
        <div className="column">
          <pre id="ip_packets"></pre>
        </div>
      </div>
   </div>
  );
}

export default Realtime;
