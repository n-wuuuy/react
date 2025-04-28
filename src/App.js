import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MainPage from './Components/pages/MainPage/MainPage';
import About from './Components/pages/About/About';
import Contact from './Components/pages/Contact/Contact';
import Services from './Components/pages/Services/Services';
import AboutUsEmploee from './Components/pages/AboutUsEmploee/AboutUsEmploee';
import Header from './Components/common/Header/Header';
import Footer from './Components/common/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header будет отображаться на всех страницах */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/emploee" element={<AboutUsEmploee />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer /> {/* Footer будет отображаться на всех страницах */}
      </div>
    </Router>
  );
}

export default App;
