import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from '../src/app/components/Dashboard';
import Login from '../src/app/components/Login';
import Register from '../src/app/components/Register';


function App() {
  return (
    <Router>
      <div className='container' >
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
