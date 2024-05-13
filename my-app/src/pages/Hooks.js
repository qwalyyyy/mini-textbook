import React from 'react';

const Hooks = () => {
    return (
        <div>
            <h1>Hooks</h1>
            <p>Хуки позволяют вам использовать состояние и другие возможности React без написания классов.</p>
            
            <h2>useState</h2>
            <p>Хук <code>useState</code> позволяет добавлять состояние в функциональные компоненты.</p>
            <p>Синтаксис использования <code>useState</code>:</p>
            <pre>
                <code>
{`const [state, setState] = useState(initialState);`}
                </code>
            </pre>
            <p>Пример использования <code>useState</code>:</p>
            <pre>
                <code>
{`import React, { useState } from 'react';

function Example() {
    // Объявление переменной состояния, которую мы назовем "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми меня
            </button>
        </div>
    );
}`}
                </code>
            </pre>
            <p>В этом примере мы используем <code>useState</code> для отслеживания количества кликов по кнопке. Каждый раз, когда пользователь нажимает кнопку, функция <code>setCount</code> обновляет состояние <code>count</code>.</p>

            <h2>useEffect</h2>
            <p>Хук <code>useEffect</code> позволяет выполнять побочные эффекты в функциональных компонентах. Это может включать получение данных, прямое обновление DOM и другие операции, которые нельзя сделать во время рендеринга.</p>
            <p>Синтаксис использования <code>useEffect</code>:</p>
            <pre>
                <code>
{`useEffect(() => {
    // побочный эффект
}, [dependencies]);`}
                </code>
            </pre>
            <p>Пример использования <code>useEffect</code>:</p>
            <pre>
                <code>
{`import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    // Аналогично componentDidMount и componentDidUpdate:
    useEffect(() => {
        // Обновляем заголовок документа, используя API браузера
        document.title = \`Вы нажали \${count} раз\`;
    }, [count]); // Только выполнять повторно, если count изменяется

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми меня
            </button>
        </div>
    );
}`}
                </code>
            </pre>
            <p>В этом примере <code>useEffect</code> обновляет заголовок документа каждый раз, когда изменяется значение <code>count</code>. Зависимость <code>[count]</code> гарантирует, что эффект выполняется только тогда, когда <code>count</code> изменяется.</p>

            <h2>useContext</h2>
            <p>Хук <code>useContext</code> позволяет использовать контекст в функциональных компонентах.</p>
            <pre>
                <code>
{`import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function Example() {
    const value = useContext(MyContext);

    return <div>{value}</div>;
}`}
                </code>
            </pre>
            <p>В этом примере мы используем <code>useContext</code> для доступа к значению контекста <code>MyContext</code>.</p>

            <h2>useReducer</h2>
            <p>Хук <code>useReducer</code> используется для управления состоянием сложных компонентов с логикой, включающей несколько значений состояния.</p>
            <pre>
                <code>
{`import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}`}
                </code>
            </pre>
            <p>В этом примере <code>useReducer</code> используется для управления состоянием счетчика с действиями <code>increment</code> и <code>decrement</code>.</p>
        </div>
    );
};

export default Hooks;
