import React from 'react';
import { Link } from 'react-router-dom';
import ReactLogo from './images/reactlogo.svg'; // Путь к изображению React
import './Home.css'; // Импорт CSS файла с стилями

const Home = () => {
    return (
        <div className="home-container">
            <div className="content-container">
                <img src={ReactLogo} alt="React Logo" className="react-logo" />
                <p className="home-text">React</p>
                <p className="home-text">The library for web and native user interfaces</p>
                <div className="button-container">
                    <Link to="/documentation" className="home-button light-button">Learn React</Link>
                    <Link to="/install" className="home-button dark-button">Try Install</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
