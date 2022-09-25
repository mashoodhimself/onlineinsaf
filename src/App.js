
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavMenu from './components/NavMenu';
import List from "./components/List";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';


function App() {

  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
