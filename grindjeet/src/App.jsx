import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageContent from "./Components/HomePage"; 
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePageContent />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
        </Routes>
    </>
  );
}

export default App;