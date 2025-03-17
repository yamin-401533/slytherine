import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Gamepad2 } from 'lucide-react';
import '../styles/games.css';
const gamesData = [
  {
    id: 1,
    image: require('../assets/images/img-game1.jpg'),
    title: 'Harry Potter: Hogwarts Legacy',
    releaseDate: 'February 10, 2023',
    platform: 'PS5, Xbox Series X/S, PC',
    description: 'An immersive, open-world action RPG set in the 1800s wizarding world. Create your own character, attend classes at Hogwarts, and uncover ancient secrets.',
    link: 'https://www.hogwartslegacy.com'
  },
  {
    id: 2,
    image: require('../assets/images/img-game2.jpg'),
    title: 'Harry Potter: Magic Awakened',
    releaseDate: 'June 27, 2023',
    platform: 'iOS, Android, PC',
    description: 'A multiplayer wizarding dueling game combining card collection with RPG elements. Master spells, attend classes, and duel other players.',
    link: 'https://www.harrypotter-magicawakened.com'
  },
  {
    id: 3,
    image: require('../assets/images/img-game3.jpg'),
    title: 'Harry Potter: Hogwarts Mystery',
    releaseDate: 'Available Now',
    platform: 'iOS, Android',
    description: 'Experience life as a Hogwarts student in the 1980s. Solve mysteries, learn spells, and make choices that influence your whole story.',
    link: 'https://www.harrypotterhogwartsmystery.com'
  }
];

function AppGames() {
  return (
    <section id="games" className="block games-block">
      <video autoPlay muted loop>
        <source src={require('../assets/images/IMG_1140.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container>
        <div className="title-holder">
          <h1>Wizarding World Games</h1>
          
          <div className="subtitle">Experience the Magic Through Gaming - just play, discover the magic and say All izz Well</div>
          
        </div>
        
        <br />
        <Row>
          {gamesData.map(game => {
            return (
              <Col sm={4} key={game.id}>
                <div className='holder'>
                  <Card className="h-100">
                    <Card.Img variant="top" src={game.image} />
                    <Card.Body>
                      <div className="d-flex align-items-center mb-2">
                        <Gamepad2 className="me-2" size={20} />
                        <span className="text-muted">{game.platform}</span>
                      </div>
                      <Card.Title>{game.title}</Card.Title>
                      <time className="text-muted d-block mb-3">Release Date: {game.releaseDate}</time>
                      <Card.Text>{game.description}</Card.Text>
                      <a href={game.link} className="btn btn-primary">
                        Play Now <i className="fas fa-chevron-right"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppGames;