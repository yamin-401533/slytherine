import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import img1 from '../assets/images/img1.jpg';
import img16 from '../assets/images/img16.jpg';
import '../styles/about.css';

function AppAbout() {
  const sectionRef = useRef(null);
  const [votes, setVotes] = useState({
    Ravenclaw: 28,
    Gryffindor: 26,
    Slytherin: 26,
    Hufflepuff: 19,
  });

  const handleVote = (house) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [house]: prevVotes[house] + 1,
    }));
  };

  const houses = [
    { name: "Ravenclaw", progress: votes.Ravenclaw, emoji: "🦅", variant: "info", trait: "Intelligence" },
    { name: "Gryffindor", progress: votes.Gryffindor, emoji: "🦁", variant: "danger", trait: "Bravery" },
    { name: "Slytherin", progress: votes.Slytherin, emoji: "🐍", variant: "success", trait: "Ambition" },
    { name: "Hufflepuff", progress: votes.Hufflepuff, emoji: "🦡", variant: "warning", trait: "Loyalty" },
  ];

  return (
    <section id="about" className="block about-block py-5" ref={sectionRef}>
      <Container>
        <div className="title-holder text-center mb-5 animate-on-scroll">
          <h1>HARRY POTTER BOOK DAY 2024</h1>
          
          <div className="subtitle">Celebrate the magic of Harry Potter with Bloomsbury • 17th October 2024</div>
        </div>

        <Row className="g-4 align-items-stretch">
          {/* Left Column */}
          <Col lg={6}>
            <Card className="h-100 shadow-sm animate-on-scroll">
              <Card.Body className="p-4">
                <div className='img mb-4'>
                  <Card.Img
                    variant="top"
                    src={img1}
                    className="img-fluid rounded"
                    style={{ objectFit: 'cover', height: '400px', width: '100%' }}
                  />
                </div>
                <br></br>
                <br></br>
                <h3 className="mb-3">Harry Potter Book Day</h3>
                
                <p>
                  Harry Potter Book Day is a global celebration of J.K. Rowling's iconic series.
                  Bloomsbury creates a special free, downloadable event kit, packed with decoration,
                  costume, activity, and game ideas for magical celebrations worldwide.
                </p>

                <div className="info-badges mb-4">
                  <Badge bg="primary" className="me-2 p-2">Free Event Kit</Badge>
                  <Badge bg="secondary" className="me-2 p-2">Magical Activities</Badge>
                  <Badge bg="info" className="p-2">Global Event</Badge>
                </div>
                <br></br>
                <h3 className="mb-3">Who can take part?</h3>
                <p>
                  Everyone! Whether you're a teacher, librarian, bookseller, parent, carer, or simply a fan,
                  Harry Potter Book Day is for you! Celebrate at home, in your school, library, bookshop, or anywhere magical.
                </p>

                <h3 className="mb-3">Magical Activities and Crafts</h3>
                <p>
                  Unleash your creativity with Harry Potter-themed crafts and activities. From making your own wand
                  and potion bottles to creating house banners and spell books, there's something for every fan.
                  These activities are perfect for adding a touch of magic to your Harry Potter Book Day celebrations.
                </p>

                <div className="event-details mt-4 p-3 rounded">
                  <h5 className="mb-3"><i className="fas fa-calendar-alt me-2"></i>Event Details</h5>
                  <p className="mb-2"><strong>Date:</strong> 17th October 2024</p>
                  <p className="mb-2"><strong>Event Kit:</strong> Available for download from Bloomsbury's website</p>
                  <p className="mb-0">
                    <strong>Social Media: </strong>
                    <a href="https://slytherine.netlify.app/" target="_blank" rel="noopener noreferrer" className="social-link">
                      slytherin.com
                    </a>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column */}
          <Col lg={6}>
            <Card className="h-100 shadow-sm animate-on-scroll">
              <Card.Body className="p-4">
                <div className="theme-banner p-3 mb-4 text-center rounded">
                  <h4 className="mb-0">2024 Theme: Care of Magical Creatures</h4>
                </div>



                <div className="featured-creatures d-flex justify-content-between my-4">
                  <div className="creature text-center">
                    <div className="creature-icon mb-2">🦄</div>
                    <div className="creature-name">Unicorn</div>
                  </div>
                  <div className="creature text-center">
                    <div className="creature-icon mb-2">🐉</div>
                    <div className="creature-name">Dragon</div>
                  </div>
                  <div className="creature text-center">
                    <div className="creature-icon mb-2">🦅</div>
                    <div className="creature-name">Hippogriff</div>
                  </div>
                  <div className="creature text-center">
                    <div className="creature-icon mb-2">🦊</div>
                    <div className="creature-name">Niffler</div>
                  </div>
                </div>

                <div className="leaderboard-container">
                  <h3 className="text-center mb-4"><b>House Points Leaderboard 🏆</b></h3>
                  {houses.map((house, index) => (
                    <div key={index} className="mb-4 position-relative house-progress">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fw-bold">{house.emoji} {house.name}</span>
                        <span>{house.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{ width: `${house.progress}%` }}
                        ></div>
                      </div>
                      <button
                        className="btn btn-sm btn-outline-light mt-2"
                        onClick={() => handleVote(house.name)}
                      >
                        Vote for {house.name}
                      </button>
                    </div>
                  ))}
                </div>
                <br></br>
                <div className='img'>
                  <Image
                    src={img16}
                    className="img-fluid rounded-3 shadow"
                    style={{ objectFit: 'cover', height: '460px', width: '100%' }}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;