import React from 'react';
import './IntroductionPage.css'; // Импорт CSS файла с стилями

const IntroductionPage = () => {
  return (
    <div className="introduction-container">
      <h2 className="introduction-heading">Введение</h2>
      <p className="introduction-text">
        React - это JavaScript библиотека, которая используется для создания интерактивных пользовательских интерфейсов. Она была разработана Facebook и официально выпущена в 2013 году. Одной из ключевых особенностей React является использование компонентного подхода.
      </p>
      <h3 className="introduction-heading">Преимущества React:</h3>
      <ul className="introduction-list">
        <li className="introduction-list-item">Компонентный подход делает код более организованным и легким для понимания.</li>
        <li className="introduction-list-item">Виртуальный DOM обеспечивает высокую производительность при обновлении пользовательского интерфейса.</li>
        <li className="introduction-list-item">Разнообразие инструментов и библиотек позволяет создавать масштабируемые и сложные приложения.</li>
        <li className="introduction-list-item">Официальная документация и широкое сообщество разработчиков облегчают изучение и решение проблем.</li>
      </ul>
      <h3 className="introduction-heading">Пример использования React:</h3>
      <p className="introduction-text">Ниже приведен пример использования компонента React для отображения приветствия:</p>
      <div className="introduction-code">
        <pre><code>
          import React from 'react'; <br/>
          <br/> m
          const Welcome = () => (
  <div>
    <p>Привет, мир!</p>
    <br />
    <p>Добро пожаловать в мир React!</p>
  </div>
); <br/>
          <br/>
          export default Welcome;
        </code></pre>
      </div>
      <p className="introduction-text">Этот пример показывает, как легко и чисто можно создать компонент React для отображения простого текста.</p>

      <h3 className="introduction-heading">Основные концепции React:</h3>
      <p className="introduction-text">
        React включает в себя несколько ключевых концепций, которые помогают разработчикам создавать эффективные и масштабируемые приложения. Некоторые из этих концепций включают в себя:
      </p>
      <ul className="introduction-list">
        <li className="introduction-list-item">Компоненты: основные строительные блоки React приложений.</li>
        <li className="introduction-list-item">Состояние (state) и свойства (props): механизмы для управления данными и передачи информации между компонентами.</li>
        <li className="introduction-list-item">Виртуальный DOM: эффективный подход к обновлению пользовательского интерфейса.</li>
        <li className="introduction-list-item">Жизненный цикл компонента: методы, вызываемые в разные моменты жизни компонента.</li>
        <li className="introduction-list-item">И многое другое...</li>
      </ul>

      <h3 className="introduction-heading">Ресурсы для изучения React:</h3>
      <p className="introduction-text">
        Если вы хотите углубить свои знания по React, рекомендуется изучить следующие ресурсы:
      </p>
      <ul className="introduction-list">
        <li className="introduction-list-item">Официальная документация React: https://reactjs.org/docs/getting-started.html</li>
        <li className="introduction-list-item">Курсы и уроки на сайтах Udemy, Coursera и Codecademy.</li>
        <li className="introduction-list-item">Сообщества и форумы разработчиков, такие как Stack Overflow и Reddit.</li>
      </ul>

      <p className="introduction-text">Эти ресурсы помогут вам стать более уверенным и эффективным разработчиком React.</p>
    </div>
  );
}

export default IntroductionPage;
