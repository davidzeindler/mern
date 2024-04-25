import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from '../src/app/components/Dashboard-page';
import Login from '../src/app/components/Login-page';
import Register from '../src/app/components/Register-page';
import Header from './app/components/Header';
import { ToastContainer } from 'react-toastify';
import TaskBoard from './app/components/Task/Tasks-board-page';
import TaskList from '../src/app/components/Task/Task-list';
import BookList from './app/components/Library/BookList';
import LibraryDashboard from './app/components/Library/Library-page';


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
          <Route path='/tasks-board' element={<TaskBoard/>} />
          <Route path='/all-tasks' element={<TaskList/>} />
          <Route path='/library' element={<LibraryDashboard/>} />
          <Route path='/library/booklist' element={<BookList/>} />

        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;