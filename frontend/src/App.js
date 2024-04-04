import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from '../src/app/components/Dashboard';
import Login from '../src/app/components/Login';
import Register from '../src/app/components/Register';
import Header from './app/components/Header';
import { ToastContainer } from 'react-toastify';
import TaskBoard from './app/components/Task/TasksBoard';
import TaskList from '../src/app/components/Task/TaskList';
import ArticlesBoard from '../src/app/components/Article/ArticlesBoard';
import ArticleForm from '../src/app/components/Article/ArticleForm';
import ArticleList from './app/components/Article/ArticleList';


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
          <Route path='/articles-board' element={<ArticlesBoard/>} />
          <Route path='/articles-entry' element={<ArticleForm/>} />
          <Route path='/all-articles' element={<ArticleList/>} />
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;