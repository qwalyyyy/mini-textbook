import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './pages/Home';
import Documentation from './pages/documentation';
import Install from './pages/install'; // Импортируйте компонент для страницы Install
import IntroductionPage from './pages/IntroductionPage'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/install" element={<Install />} />
          <Route path="/documentation/IntroductionPage" element={<IntroductionPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
