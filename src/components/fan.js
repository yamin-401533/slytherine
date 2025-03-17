import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Spinner from 'react-bootstrap/Spinner';
import { Heart, Pen, PaintBucket, Film, ExternalLink } from 'lucide-react';
import '../styles/fancreation.css';
// Import images


const fanFictionData = [
  {
    id: 1,
    title: "The Marauders: Untold Stories",
    author: "MoonlightProngs",
    platform: "Archive of Our Own",
    likes: "15.2K",
    summary: "A deep dive into the lives of the Marauders during their early years at Hogwarts.",
    link: "#"
  },
  {
    id: 2,
    title: "Hogwarts: A New Generation",
    author: "WizardingScribe",
    platform: "FanFiction.net",
    likes: "12.8K",
    summary: "Following the children of Harry, Ron, and Hermione as they navigate their own adventures at Hogwarts.",
    link: "#"
  },
  {
    id: 3,
    title: "The Lost Letters of Lily Evans",
    author: "PotterProse",
    platform: "Archive of Our Own",
    likes: "9.3K",
    summary: "Discovered correspondence between Lily Evans and her friends during the First Wizarding War.",
    link: "#"
  }
];

const fanArtData = [
  {
    id: 1,
    title: "The Battle of Hogwarts",
    artist: "MagicBrush",
    platform: "DeviantArt",
    likes: "25.6K",
    image: require('../assets/images/img-fan1.jpg'),
    link: "#"
  },
  {
    id: 2,
    title: "Marauders Map Reimagined",
    artist: "WizardArtist",
    platform: "Instagram",
    likes: "18.9K",
    image: require('../assets/images/img-fan2.jpg'),
    link: "#"
  },
  {
    id: 3,
    title: "Hogwarts Through the Seasons",
    artist: "MagicalCanvas",
    platform: "DeviantArt",
    likes: "22.1K",
    image: require('../assets/images/img-fan3.jpg'),
    link: "#"
  }
];

const fanFilmsData = [
  {
    id: 1,
    title: "Severus Snape and the Marauders",
    creator: "Broad Strokes",
    platform: "YouTube",
    views: "2.1M",
    thumbnail: require('../assets/images/img-fan4.jpg'),
    duration: "25:34",
    link: "#"
  },
  {
    id: 2,
    title: "Voldemort: Origins of the Heir",
    creator: "TryLife Studios",
    platform: "YouTube",
    views: "1.8M",
    thumbnail: require('../assets/images/img-fan5.jpg'),
    duration: "52:18",
    link: "#"
  },
  {
    id: 3,
    title: "The House of Black: A Family's Legacy",
    creator: "WizardingFilms",
    platform: "YouTube",
    views: "987K",
    thumbnail: require('../assets/images/img-fan6.jpg'),
    duration: "18:45",
    link: "#"
  }
];

function AppFanCreations() {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  

  const FanArtCard = ({ art }) => (
    <Card className="h-100 mb-4 shadow-sm">
      <Card.Img
        variant="top"
        src={art.image}
        onError={(e) => {
          e.target.src = 'fallback-image-path.jpg';
        }}
        alt={art.title}
      />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <Card.Title>{art.title}</Card.Title>
          <div className="d-flex align-items-center text-danger">
            <Heart size={16} className="me-1" />
            <small>{art.likes}</small>
          </div>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <small className="text-muted">by {art.artist}</small>
          <small className="text-muted">{art.platform}</small>
        </div>
        <a href={art.link} className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
          View Artwork <ExternalLink size={16} className="ms-2" />
        </a>
      </Card.Body>
    </Card>
  );

  const FanFilmCard = ({ film }) => (
    <Card className="h-100 mb-4 shadow-sm">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={film.thumbnail}
          onError={(e) => {
            e.target.src = 'fallback-image-path.jpg';
          }}
          alt={film.title}
        />
        <span className="position-absolute bottom-0 end-0 bg-dark bg-opacity-75 text-white p-2 m-2 rounded">
          {film.duration}
        </span>
      </div>
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        <div className="d-flex justify-content-between mb-3">
          <small className="text-muted">by {film.creator}</small>
          <small className="text-muted">{film.views} views</small>
        </div>
        <a href={film.link} className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
          Watch Film <ExternalLink size={16} className="ms-2" />
        </a>
      </Card.Body>
    </Card>
  );

  const FanFictionCard = ({ story }) => (
    <Card className="h-100 mb-4 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <Card.Title>{story.title}</Card.Title>
          <div className="d-flex align-items-center text-danger">
            <Heart size={16} className="me-1" />
            <small>{story.likes}</small>
          </div>
        </div>
        <Card.Text>{story.summary}</Card.Text>
        <div className="d-flex justify-content-between mb-3">
          <small className="text-muted">by {story.author}</small>
          <small className="text-muted">{story.platform}</small>
        </div>
        <a href={story.link} className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
          Read Story <ExternalLink size={16} className="ms-2" />
        </a>
      </Card.Body>
    </Card>
  );

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <section id="fan-creations" className="block fan-creations-block py-5">
      <Container>
        <div className="title-holder text-center mb-5">
          <h1>Magical Fan Creations</h1>
          <div className="subtitle">Discover amazing works created by the Harry Potter community</div>
        </div>

        <Tab.Container id="fan-content-tabs" defaultActiveKey="fanfilms">
          <Nav variant="pills" className="justify-content-center mb-4">
            <Nav.Item>
              <Nav.Link eventKey="fanfilms" className="d-flex align-items-center">
                <Film className="me-2" size={16} />
                Fan Films
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link eventKey="fanart" className="d-flex align-items-center">
                <PaintBucket className="me-2" size={16} />
                Fan Art
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fanfiction" className="d-flex align-items-center">
                <Pen className="me-2" size={16} />
                Fan Fiction
              </Nav.Link>
            </Nav.Item>
            
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="fanfiction">
              <Row>
                {fanFictionData.map(story => (
                  <Col xs={12} md={6} lg={4} key={story.id}>
                    <FanFictionCard story={story} />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="fanart">
              <Row>
                {fanArtData.map(art => (
                  <Col xs={12} md={6} lg={4} key={art.id}>
                    <FanArtCard art={art} />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="fanfilms">
              <Row>
                {fanFilmsData.map(film => (
                  <Col xs={12} md={6} lg={4} key={film.id}>
                    <FanFilmCard film={film} />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
}



export default AppFanCreations;