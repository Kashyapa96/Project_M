import React, { useState, useEffect } from 'react';
import './offline.css'; // Import your CSS file for styling

import io from 'socket.io-client';
import Node from '../images/nodes.png';

const ProjectMComponent = () => {
  const [gtpCPackets, setGtpCPackets] = useState([]);
  const [udpPackets, setUdpPackets] = useState([]);
  const [diameterPackets, setDiameterPackets] = useState([]);
  const [mapPackets, setMapPackets] = useState([]);
  const [imsi, setImsi] = useState('');

  useEffect(() => {
    const socket = io('http://172.19.10.22:3000');

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('captured_packet', (packet) => {
      setGtpCPackets(packet.gtp_c);
      setUdpPackets(packet.gtp_u);
      setDiameterPackets(packet.diameter);
      setMapPackets(packet.map);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendIMSI = () => {
    // Send IMSI to server
    // You may want to add validation or other handling here
    const socket = io('http://172.19.10.22:3000');
    socket.emit('imsi_value', { imsi: imsi });
    socket.disconnect();
  };

  return (
    <div>
      <h1>Project M</h1>

      <input
        type="text"
        placeholder="Enter IMSI"
        value={imsi}
        onChange={(e) => setImsi(e.target.value)}/>
    
      <button onClick={sendIMSI}>Send IMSI</button>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>

      <div className="packet-box">
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
          <pre>{JSON.stringify(gtpCPackets, null, 2)}</pre>
      </div>

        <div className="packet-box">
          <h2>GTP U Packets</h2>
          <pre>{JSON.stringify(udpPackets, null, 2)}</pre>
        </div>

        <div className="packet-box">
          <h2>Diameter Packets</h2>
          <pre>{JSON.stringify(diameterPackets, null, 2)}</pre>
        </div>

        <div className="packet-box">
          <h2>MAP</h2>
          <pre>{JSON.stringify(mapPackets, null, 2)}</pre>
        </div>
      </div>
      </div> 

  );
};

export default ProjectMComponent;
