import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'
import Offline from './components/offline'
import Realtime from './components/realtime'
function App() {
  return (
    <Router>   
       <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/offline" element={<Offline />} /> 
            <Route path="/realtime" element={<Realtime />} />       
        </Routes> 
    </Router>
  )
}

export default App;
