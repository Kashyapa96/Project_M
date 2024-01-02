import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'
import Offline from './components/offline'
import Realtime from './components/realtime'
import Test from './components/test'
function App() {
  return (
    <Router>   
       <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/offline" element={<Offline />} /> 
            <Route path="/realtime" element={<Realtime />} /> 
            <Route path="/test" element={<Test />} />      
        </Routes> 
    </Router>
  )
}

export default App;
