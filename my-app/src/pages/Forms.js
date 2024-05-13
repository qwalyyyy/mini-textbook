import React, { useState } from 'react';

const Forms = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <h1>Forms</h1>
            <p>Формы в React работают аналогично обычным HTML-формам, но управление состоянием осуществляется с помощью React.</p>

            <h2>Пример формы</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Сообщение:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button type="submit">Отправить</button>
            </form>

            {submitted && (
                <div>
                    <h2>Спасибо за ваше сообщение!</h2>
                    <p>Имя: {name}</p>
                    <p>Email: {email}</p>
                    <p>Сообщение: {message}</p>
                </div>
            )}

            <h2>Управляемые компоненты</h2>
            <p>Управляемые компоненты — это компоненты, состояние которых управляется React. В этом примере каждый элемент формы (input, textarea) связан со значением состояния и обновляется при изменении состояния.</p>

            <h2>Неуправляемые компоненты</h2>
            <p>Неуправляемые компоненты управляются самим DOM. Вместо использования состояния React для управления значением формы, вы можете использовать рефы для доступа к значению непосредственно.</p>
            <pre>
                <code>
{`import React, { useRef } from 'react';

function UncontrolledForm() {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(\`Имя: \${nameRef.current.value}, Email: \${emailRef.current.value}\`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Имя:</label>
                <input type="text" ref={nameRef} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" ref={emailRef} />
            </div>
            <button type="submit">Отправить</button>
        </form>
    );
}

export default UncontrolledForm;`}
                </code>
            </pre>
        </div>
    );
};

export default Forms;
