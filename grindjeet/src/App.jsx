import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageContent from "./Components/HomePage"; 
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePageContent />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/form' element={<Form />}></Route>
        </Routes>
    </>
  );
}

export default App;