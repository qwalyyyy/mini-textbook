import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            Текущая тема: {theme}
        </button>
    );
};

const ContextAPI = () => {
    return (
        <ThemeProvider>
            <div>
                <h1>Context API</h1>
                <p>Context API позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на каждом уровне.</p>

                <h2>Пример использования Context API</h2>
                <ThemeButton />

                <h2>Создание контекста</h2>
                <p>Чтобы создать контекст, используйте <code>createContext</code>. Это создаст объект контекста, который можно использовать для передачи данных.</p>
                <pre>
                    <code>
{`import { createContext } from 'react';

const MyContext = createContext(defaultValue);`}
                    </code>
                </pre>

                <h2>Использование контекста</h2>
                <p>Чтобы использовать контекст, оберните компоненты, которые должны иметь доступ к контексту, в <code>Provider</code> и передайте значение контекста через пропсы.</p>
                <pre>
                    <code>
{`import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [value, setValue] = useState('default value');

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};`}
                    </code>
                </pre>

                <h2>Доступ к контексту</h2>
                <p>Чтобы получить доступ к контексту, используйте хук <code>useContext</code>.</p>
                <pre>
                    <code>
{`import React, { useContext } from 'react';
import { MyContext } from './MyProvider';

const MyComponent = () => {
    const value = useContext(MyContext);

    return <div>{value}</div>;
};`}
                    </code>
                </pre>
            </div>
        </ThemeProvider>
    );
};

export default ContextAPI;
