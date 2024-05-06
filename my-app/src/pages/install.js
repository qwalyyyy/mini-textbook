// Import React and necessary resources
import React from 'react';
import ReactLogo from './images/reactlogo.svg'; // Путь к изображению React
import './install.css'; // Импорт CSS файла с дополнительными стилями

// Define the Install component
const Install = () => {
    return (
        <div className="install-container">
            <h1 className="animated-heading">Добро пожаловать в React</h1>
            <img src={ReactLogo} alt="Логотип React" className="react-logo animated-logo" />
            <div className="install-instructions animated-instructions">
                <h2>Инструкция по установке:</h2>
                <ul>
                    <li>
                        <p>Убедитесь, что на вашем компьютере установлен Node.js и npm. Если они не установлены, вы можете загрузить их с официального сайта <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a>.</p>
                    </li>
                    <li>
                        <p>Откройте терминал (командную строку) и выполните команду для создания нового проекта React:</p>
                        <code>npx create-react-app my-react-app</code>
                        <p>Где `my-react-app` - имя вашего нового проекта. После создания проекта, перейдите в его папку с помощью команды:</p>
                        <code>cd my-react-app</code>
                    </li>
                    <li>
                        <p>Установите зависимости проекта, введите в терминале:</p>
                        <code>npm install</code>
                    </li>
                    <li>
                        <p>Запустите проект, введя команду:</p>
                        <code>npm start</code>
                        <p>Это запустит локальный сервер разработки и откроет ваш проект React в браузере по умолчанию.</p>
                    </li>
                </ul>
                <p className="additional-info">Для более подробной информации о React и его возможностях, вы можете посетить <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">официальный сайт React</a>.</p>
            </div>
        </div>
    );
}

export default Install;
