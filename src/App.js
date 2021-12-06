import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Table from './pages/Table';
import React from 'react';
import Content from './Components/Content';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import './Components/users.css';

function App() {
  return (
    <div className="App"> 
    <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Users" element={<Table />} />
            <Route path="/login" element={<Content />} />
            <Route path="/*" element={<div>ERROR</div>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
