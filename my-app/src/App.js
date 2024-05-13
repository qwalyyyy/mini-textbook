import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './pages/Home';
import Documentation from './pages/documentation';
import Install from './pages/install';
import IntroductionPage from './pages/IntroductionPage';
import Tutorial from './pages/tutorial';
import ComponentsAndPropsPage from './pages/components-and-props'; // Corrected import

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/install" element={<Install />} />
          <Route path="/documentation/IntroductionPage" element={<IntroductionPage />} />
          <Route path="/documentation/components-and-props" element={<ComponentsAndPropsPage />} /> {/* Corrected path */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
