import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from '../src/app/components/Dashboard';
import Login from '../src/app/components/Login';
import Register from '../src/app/components/Register';
import Header from '../src/app/components/header';
import { ToastContainer } from 'react-toastify';
import TaskList from './app/components/TaskList';


function App() {
  return (
    <>   
    <Router>     
      <div className='container' >
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/alltasks' element={<TaskList/>} />
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
