import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import Home from './components/Home/Home';
// import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Special from './Pages/Special/Special';
import Menu from './Pages/Menu/Menu';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="special" element={<Special />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
