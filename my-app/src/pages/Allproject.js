import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../pages/allproject.css'; // Файл со стилями

// Пример данных об играх (замените на реальные данные)
const gamesData = [
  { id: 1, title: 'Game 1', description: 'Description of Game 1', link: '/game1' },
  { id: 2, title: 'Game 2', description: 'Description of Game 2', link: '/game2' },
  { id: 3, title: 'Game 3', description: 'Description of Game 3', link: '/game3' },
  { id: 4, title: 'Game 4', description: 'Description of Game 4', link: '/game4' },
  { id: 5, title: 'Game 5', description: 'Description of Game 5', link: '/game5' },
  { id: 6, title: 'Game 6', description: 'Description of Game 6', link: '/game6' },
  { id: 7, title: 'Game 7', description: 'Description of Game 7', link: '/game7' },
  { id: 8, title: 'Game 8', description: 'Description of Game 8', link: '/game8' },
  { id: 8, title: 'Game 9', description: 'Description of Game 9', link: '/game9' },
  { id: 8, title: 'Game 10', description: 'Description of Game 10', link: '/game10' },
  { id: 8, title: 'Game 11', description: 'Description of Game 11', link: '/game11' },
  { id: 8, title: 'Game 12', description: 'Description of Game 12', link: '/game12' },
];

class GameCard extends Component {
  render() {
    const { title, description, link } = this.props.game;
    return (
      <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
        <a href={link} className="game-link">
          <Card className="game-card">
            <Card.Img variant="top" src={require(`../pages/images/fall.jpg`)} alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Col>
    );
  }
}

export default class Portfolio extends Component {
  render() {
    return (
      <Container className="portfolio-container mt-4 mb-4">
        <Row className="justify-content-center">
          {gamesData.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </Row>
      </Container>
    );
  }
}
