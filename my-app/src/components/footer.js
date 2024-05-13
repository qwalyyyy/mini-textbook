
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Основы React</h5>
            <ul className="list-unstyled">
              <li><Link to="/documentation/introduction" className="text-white">Введение</Link></li>
              <li><Link to="/documentation/components" className="text-white">Компоненты</Link></li>
              <li><Link to="/documentation/hooks" className="text-white">Хуки</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Дополнительно</h5>
            <ul className="list-unstyled">
              <li><Link to="/documentation/styling" className="text-white">Стилизация</Link></li>
              <li><Link to="/documentation/routing" className="text-white">Маршрутизация</Link></li>
              <li><Link to="/documentation/state-management" className="text-white">Управление состоянием</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Сообщество</h5>
            <ul className="list-unstyled">
              <li><a href="https://reactjs.org/" className="text-white" target="_blank" rel="noopener noreferrer">Официальный сайт React</a></li>
              <li><a href="https://ru.reactjs.org/community/support.html" className="text-white" target="_blank" rel="noopener noreferrer">Поддержка</a></li>
              <li><a href="https://ru.reactjs.org/community/conferences.html" className="text-white" target="_blank" rel="noopener noreferrer">Конференции</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} React Учебник. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
