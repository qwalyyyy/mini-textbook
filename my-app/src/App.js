import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Footer from "./components/footer"; // Добавлен импорт Footer

function App() {
  return (
    <div>
      <Header />
      <Footer /> {/* Добавлен компонент Footer */}
    </div>
  );
}

export default App;
