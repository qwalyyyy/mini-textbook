import React from 'react';
import './tutorial.css'; // Импорт CSS файла с стилями


const Tutorial = () => {
    return (
        <div className="container1">
            <h1 className="title">Добро пожаловать в мир React!</h1>
            <p className="description">
                React - это библиотека JavaScript для создания пользовательских интерфейсов.
                Он позволяет разработчикам создавать мощные и эффективные веб-приложения.
                В этом туториале мы рассмотрим основы React и покажем, как начать работу с этой библиотекой.
            </p>
            <div className="feature">
                <h2 className="feature-title">Особенности React</h2>
                <ul className="feature-list">
                    <li>Компонентный подход: разделение интерфейса на небольшие и переиспользуемые компоненты.</li>
                    <li>Виртуальный DOM: эффективное обновление только измененных частей интерфейса.</li>
                    <li>Однонаправленный поток данных: управление состоянием приложения через props и state.</li>
                    <li>Расширяемость: возможность использовать дополнительные библиотеки и инструменты.</li>
                    <li>JSX: возможность писать HTML-подобный код в JavaScript.</li>
                    <li>Экосистема: большое количество инструментов, библиотек и фреймворков вокруг React.</li>
                    <li>Современный подход: поддержка функциональных компонентов, хуков и других современных концепций.</li>
                    <li>Производительность: оптимизации для быстрого и эффективного рендеринга интерфейса.</li>
                    <li>Кросс-платформенность: возможность разработки для веба, мобильных устройств и десктопа.</li>
                </ul>
            </div>
            <div className="getting-started">
                <h2 className="getting-started-title">Начало работы с React</h2>
                <p className="getting-started-description">
                    Для начала работы с React вам потребуется базовое понимание HTML, CSS и JavaScript.
                    Если вы новичок в веб-разработке, рекомендуется ознакомиться с основами HTML, CSS и JavaScript
                    перед изучением React.
                </p>
                <p className="getting-started-description">
                    Первым шагом является установка Node.js и npm (пакетного менеджера), если они еще не установлены на вашем компьютере.
                    Затем вы можете создать новое приложение React с помощью Create React App.
                </p>
                <div className="code-window">
                    <pre><code>npx create-react-app my-app</code></pre>
                </div>
                <p className="note">
                    Замените "my-app" на имя вашего приложения.
                </p>
                <p className="tip">
                    Используйте команду npm start для запуска приложения в режиме разработки и начните изучение React!
                </p>
            </div>
            <div className="core-concepts">
                <h2 className="core-concepts-title">Основные концепции React</h2>
                <p className="core-concepts-description">
                    Перед тем как начать писать код, важно понять несколько ключевых концепций в React:
                </p>
                <ul className="core-concepts-list">
                    <li>Компоненты: основные строительные блоки интерфейса в React.</li>
                    <li>Props (свойства): передача данных от родительского компонента к дочернему.</li>
                    <li>State (состояние): управление динамическим поведением компонента.</li>
                    <li>Жизненный цикл компонента: различные этапы жизненного цикла компонента и методы, связанные с каждым этапом.</li>
                    <li>События: обработка пользовательских действий, таких как клики и ввод данных.</li>
                    <li>Условный рендеринг: показ или скрытие компонентов на основе условий.</li>
                    <li>Списки и ключи: отображение списков данных и оптимизация рендеринга.</li>
                    <li>Формы: работа с формами для ввода данных пользователем.</li>
                    <li>Hooks: использование хуков для добавления состояния и других возможностей в функциональные компоненты.</li>
                </ul>
            </div>
            <div className="video-tutorial">
                <h2 className="video-tutorial-title">Видео-туториалы по React</h2>
                <p className="video-tutorial-description">
                    Дополните свое изучение React с помощью видео-туториалов от опытных разработчиков:
                </p>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="React Video Tutorial"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="next-steps">
                <h2 className="next-steps-title">Следующие шаги</h2>
                <p className="next-steps-description">
                    После изучения основных концепций React, вы можете начать создавать свои приложения и экспериментировать
                    с различными функциями и возможностями React.
                </p>
                <p className="next-steps-description">
                    Рекомендуется изучить более продвинутые темы, такие как управление состоянием с помощью Redux, маршрутизация
                    с помощью React Router, работа с асинхронными запросами и другие современные подходы и инструменты в разработке на React.
                </p>
                <a href="https://reactjs.org/docs/getting-started.html" className="button">Документация React</a>
            </div>
        </div>
    );
}

export default Tutorial;
