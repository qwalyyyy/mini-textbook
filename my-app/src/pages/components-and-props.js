import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './components-and-props.css';
import ReactPlayer from 'react-player';

const ComponentsAndPropsPage = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <Container className="main-container">
      <Row>
        <Col md={8} className="main-content">
          <h1>Компоненты и свойства</h1>
          <p>
            Компоненты в React позволяют разделить интерфейс на независимые части, что делает код более чистым и поддерживаемым.
          </p>
          <h2>Видеоурок</h2>
          <div className="video-player">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ВАШ_ВИДЕО_ID"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </Col>
        <Col md={4} className="sidebar">
          <h3>Содержание</h3>
          <ul>
            <li><a href="#what-are-components">Что такое компоненты?</a></li>
            <li><a href="#props">Свойства (Props)</a></li>
            <li><a href="#functional-vs-class">Функциональные vs. классовые компоненты</a></li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <section id="what-are-components" className="info-section">
            <h2>Что такое компоненты?</h2>
            <p>Компоненты в React представляют собой независимые блоки, которые можно переиспользовать и поддерживать изолированно.</p>
          </section>
          <section id="props" className="info-section">
            <h2>Свойства (Props)</h2>
            <p>Свойства позволяют передавать данные от родительских компонентов дочерним компонентам.</p>
          </section>
          <section id="functional-vs-class" className="info-section">
            <h2>Функциональные vs. классовые компоненты</h2>
            <p>В React можно создавать компоненты как функциональные, так и классовые. Функциональные компоненты проще и имеют меньше кода, в то время как классовые компоненты обладают дополнительными функциями, такими как состояние (state) и методы жизненного цикла.</p>
          </section>
          <section id="example-component" className="info-section">
            <h2>Пример компонента</h2>
            <p>Давайте создадим простой пример компонента, который будет отображать список элементов и их счетчик:</p>
            <pre><code>
              {`
              import React, { useState } from 'react';

              const CounterList = ({ items }) => {
                const [counts, setCounts] = useState(new Array(items.length).fill(0));

                const handleIncrement = (index) => {
                  const newCounts = [...counts];
                  newCounts[index]++;
                  setCounts(newCounts);
                };

                return (
                  <div>
                    {items.map((item, index) => (
                      <div key={index} className="item-container">
                        <span>{item}</span>
                        <button onClick={() => handleIncrement(index)}>+</button>
                        <span>Count: {counts[index]}</span>
                      </div>
                    ))}
                  </div>
                );
              }

              const ExampleComponent = () => {
                const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
                return (
                  <div>
                    <h3>Список элементов с счетчиком</h3>
                    <CounterList items={items} />
                  </div>
                );
              }

              export default ExampleComponent;
              `}
            </code></pre>
            <p>В этом примере мы используем хук `useState` для управления состоянием списка элементов и их счетчиком.</p>
            {/* Задание */}
            <h2>Задание</h2>
            <p>Добавьте функционал увеличения счетчика при нажатии на кнопку для каждого элемента списка.</p>
            {/* Кнопка "Показать ответ" */}
            <Button onClick={handleShowAnswer} className="show-answer-btn">Показать ответ</Button>
            {/* Ответ */}
            {showAnswer && (
              <div className="answer-section">
                <h2>Ответ</h2>
                <pre><code>
                  {`
                  import React, { useState } from 'react';

                  const CounterList = ({ items }) => {
                    const [counts, setCounts] = useState(new Array(items.length).fill(0));

                    const handleIncrement = (index) => {
                      const newCounts = [...counts];
                      newCounts[index]++;
                      setCounts(newCounts);
                    };

                    return (
                      <div>
                        {items.map((item, index) => (
                          <div key={index} className="item-container">
                            <span>{item}</span>
                            <button onClick={() => handleIncrement(index)}>+</button>
                            <span>Count: {counts[index]}</span>
                          </div>
                        ))}
                      </div>
                    );
                  }

                  const ExampleComponent = () => {
                    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
                    return (
                      <div>
                        <h3>Список элементов с счетчиком</h3>
                        <CounterList items={items} />
                      </div>
                    );
                  }

                  export default ExampleComponent;
                  `}
                </code></pre>
                <p>В этом ответе мы добавляем состояние `counts`, чтобы хранить счетчик для каждого элемента списка, и функцию `handleIncrement`, которая увеличивает счетчик при нажатии на кнопку для соответствующего элемента.</p>
              </div>
            )}
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default ComponentsAndPropsPage;
