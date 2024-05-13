import React from 'react';
import { Link } from 'react-router-dom';
import './documentation.css'; // Импорт CSS файла с стилями
import reactlogo2 from '../pages/images/reactlogo2.png'; // Путь к изображению

const Documentation = () => {
  return (
    <div>
      <div className="header">
        <img src={reactlogo2} alt="Логотип" className="logo2" />
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="react-button">Официальный сайт React</a>
      </div>
     
      <div className="documentation-container">
        <h1 className="documentation-title"> React Documentation</h1>
        <div className="chapter-buttons">
          <Link to="/documentation/IntroductionPage" className="chapter-button">Введение</Link>
          <Link to="/documentation/components-and-props" className="chapter-button">Компоненты и Props</Link>
          <Link to="/documentation/state-and-lifecycle" className="chapter-button">Состояние и Жизненный Цикл</Link>
          <Link to="/documentation/events" className="chapter-button">События</Link>
          <Link to="/documentation/conditional-rendering" className="chapter-button">Условный Рендеринг</Link>
          <Link to="/documentation/lists-and-keys" className="chapter-button">Списки и Ключи</Link>
          <Link to="/documentation/forms" className="chapter-button">Формы</Link>
          <Link to="/documentation/hooks" className="chapter-button">Hooks</Link>
          <Link to="/documentation/routing" className="chapter-button">Роутинг</Link>
          <Link to="/documentation/context-api" className="chapter-button">Context API</Link>
          <Link to="/documentation/redux" className="chapter-button">Redux</Link>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
