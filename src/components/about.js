import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

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
  
  // New states for interactive features
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [userHouse, setUserHouse] = useState('');
  const [pointsEarned, setPointsEarned] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState('quiz');
  const [historicalData, setHistoricalData] = useState([
    { month: 'January', Ravenclaw: 56, Gryffindor: 62, Slytherin: 71, Hufflepuff: 52 },
    { month: 'February', Ravenclaw: 63, Gryffindor: 59, Slytherin: 65, Hufflepuff: 57 },
    { month: 'March', Ravenclaw: 71, Gryffindor: 68, Slytherin: 60, Hufflepuff: 62 },
    { month: 'April', Ravenclaw: 68, Gryffindor: 72, Slytherin: 64, Hufflepuff: 59 },
    { month: 'May', Ravenclaw: 75, Gryffindor: 70, Slytherin: 69, Hufflepuff: 63 },
    { month: 'June', Ravenclaw: 72, Gryffindor: 75, Slytherin: 73, Hufflepuff: 68 },
  ]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [completedActivities, setCompletedActivities] = useState([]);

  const houses = [
    { name: "Ravenclaw", progress: votes.Ravenclaw, emoji: "🦅", variant: "info", trait: "Intelligence" },
    { name: "Gryffindor", progress: votes.Gryffindor, emoji: "🦁", variant: "danger", trait: "Bravery" },
    { name: "Slytherin", progress: votes.Slytherin, emoji: "🐍", variant: "success", trait: "Ambition" },
    { name: "Hufflepuff", progress: votes.Hufflepuff, emoji: "🦡", variant: "warning", trait: "Loyalty" },
  ];

  const activities = [
    { id: 'quiz', name: 'Magical Creatures Quiz', points: 5, description: 'Test your knowledge of magical creatures from the wizarding world!' },
    { id: 'spell', name: 'Spell Practice', points: 3, description: 'Practice your spell pronunciation and wand movements.' },
    { id: 'potion', name: 'Potion Making', points: 8, description: 'Follow recipe instructions to brew a magical potion.' },
    { id: 'trivia', name: 'Harry Potter Trivia', points: 4, description: 'Answer trivia questions about the Harry Potter series.' },
  ];

  // Sample quiz questions for the "Magical Creatures Quiz" activity
  const quizQuestions = [
    { 
      question: 'What magical creature can only be seen by those who have witnessed death?', 
      options: ['Hippogriff', 'Thestral', 'Niffler', 'Bowtruckle'],
      answer: 'Thestral'
    },
    { 
      question: 'Which of these creatures guards the entrance to Dumbledore\'s office?', 
      options: ['Sphinx', 'Griffin', 'Gargoyle', 'Phoenix'],
      answer: 'Gargoyle'
    },
    { 
      question: 'What creature does Hagrid breed in "Goblet of Fire" for the Triwizard Tournament?', 
      options: ['Hippogriffs', 'Dragons', 'Blast-Ended Skrewts', 'Acromantulas'],
      answer: 'Blast-Ended Skrewts'
    },
  ];

  const handleVote = (house) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [house]: prevVotes[house] + 1,
    }));
  };

  const openActivityModal = () => {
    setShowActivityModal(true);
  };

  const closeActivityModal = () => {
    setShowActivityModal(false);
    setPointsEarned(0);
  };

  const selectUserHouse = (house) => {
    setUserHouse(house);
  };

  const completeActivity = () => {
    // Find the points for the selected activity
    const activity = activities.find(act => act.id === selectedActivity);
    const pointsToAdd = activity ? activity.points : 3;
    
    // Add points to the selected house
    if (userHouse) {
      setVotes(prevVotes => ({
        ...prevVotes,
        [userHouse]: prevVotes[userHouse] + pointsToAdd
      }));
      
      // Add to completed activities
      setCompletedActivities(prev => [
        ...prev, 
        { 
          activity: activity.name, 
          house: userHouse, 
          points: pointsToAdd, 
          date: new Date().toLocaleDateString() 
        }
      ]);
      
      setPointsEarned(pointsToAdd);
    }
  };

  const viewHistoricalData = () => {
    setShowHistoryModal(true);
  };

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
                  <h3 className="text-center mb-3"><b>House Points Leaderboard 🏆</b></h3>
                  
                  {/* New interactive buttons */}
                  <div className="text-center mb-4">
                    <Button variant="outline-light" className="me-2 mb-2" onClick={openActivityModal}>
                      <span className="me-1">✨</span> Earn House Points
                    </Button>
                    <Button variant="outline-light" className="mb-2" onClick={viewHistoricalData}>
                      <span className="me-1">📜</span> Historical Data
                    </Button>
                  </div>
                  
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
                  
                  {/* Recent activity log */}
                  {completedActivities.length > 0 && (
                    <div className="recent-activity mt-4">
                      <h5 className="mb-3">Recent Activities</h5>
                      <div className="recent-activity-list">
                        {completedActivities.slice(-3).reverse().map((activity, index) => (
                          <div key={index} className="activity-item mb-2 p-2 rounded">
                            <div><strong>{activity.house}</strong> earned {activity.points} points</div>
                            <div className="small text-light">{activity.activity} • {activity.date}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className='img mt-4'>
                  <Image
                    src={img16}
                    className="img-fluid rounded-3 shadow"
                    style={{ objectFit: 'cover', height: '300px', width: '100%' }}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      {/* Activity Modal */}
      <Modal show={showActivityModal} onHide={closeActivityModal} centered className="house-activity-modal">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Earn Points for Your House</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!userHouse ? (
            <div className="house-selection">
              <h5 className="mb-3 text-center">First, choose your house:</h5>
              <div className="house-buttons d-flex flex-wrap justify-content-center">
                {houses.map((house) => (
                  <Button 
                    key={house.name}
                    variant="outline-primary"
                    className="house-select-btn m-2" 
                    onClick={() => selectUserHouse(house.name)}
                  >
                    <span className="house-emoji me-2">{house.emoji}</span>
                    {house.name}
                  </Button>
                ))}
              </div>
            </div>
          ) : pointsEarned > 0 ? (
            <div className="text-center points-earned-container">
              <div className="success-icon mb-3">🏆</div>
              <h4>Congratulations!</h4>
              <p className="points-earned">You earned <span>{pointsEarned} points</span> for {userHouse}!</p>
              <Button variant="primary" onClick={closeActivityModal}>Continue</Button>
            </div>
          ) : (
            <div className="activity-selection">
              <h5 className="mb-3">Choose an activity to earn points for {userHouse}:</h5>
              
              <Form.Select 
                className="mb-3"
                value={selectedActivity} 
                onChange={(e) => setSelectedActivity(e.target.value)}
              >
                {activities.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.name} ({activity.points} points)
                  </option>
                ))}
              </Form.Select>
              
              <div className="activity-details p-3 rounded mb-4">
                <h6>
                  {activities.find(a => a.id === selectedActivity)?.name}
                </h6>
                <p className="mb-0">
                  {activities.find(a => a.id === selectedActivity)?.description}
                </p>
              </div>
              
              {selectedActivity === 'quiz' && (
                <div className="quiz-preview">
                  <p className="sample-question mb-2">Sample question:</p>
                  <p className="fw-bold mb-1">{quizQuestions[0].question}</p>
                  <ul className="quiz-options ps-3">
                    {quizQuestions[0].options.map((option, idx) => (
                      <li key={idx}>{option}</li>
                    ))}
                  </ul>
                  <p className="quiz-note">Complete the full quiz to earn points for your house!</p>
                </div>
              )}
              
              <div className="d-flex justify-content-between mt-4">
                <Button 
                  variant="outline-secondary" 
                  onClick={() => setUserHouse('')}
                >
                  Change House
                </Button>
                <Button 
                  variant="primary" 
                  onClick={completeActivity}
                >
                  Complete Activity
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
      
      {/* Historical Data Modal */}
      <Modal show={showHistoryModal} onHide={() => setShowHistoryModal(false)} centered size="lg" className="history-modal">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>House Points Historical Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container defaultActiveKey="table">
            <Nav variant="tabs" className="mb-4">
              <Nav.Item>
                <Nav.Link eventKey="table">Monthly Data</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="winners">House Cup Winners</Nav.Link>
              </Nav.Item>
            </Nav>
            
            <Tab.Content>
              <Tab.Pane eventKey="table">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th>Ravenclaw</th>
                        <th>Gryffindor</th>
                        <th>Slytherin</th>
                        <th>Hufflepuff</th>
                        <th>Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {historicalData.map((data, index) => {
                        const scores = { 
                          Ravenclaw: data.Ravenclaw, 
                          Gryffindor: data.Gryffindor, 
                          Slytherin: data.Slytherin, 
                          Hufflepuff: data.Hufflepuff 
                        };
                        const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
                        
                        return (
                          <tr key={index}>
                            <td>{data.month}</td>
                            <td>{data.Ravenclaw}</td>
                            <td>{data.Gryffindor}</td>
                            <td>{data.Slytherin}</td>
                            <td>{data.Hufflepuff}</td>
                            <td>
                              {houses.find(h => h.name === winner)?.emoji} {winner}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Tab.Pane>
              
              <Tab.Pane eventKey="winners">
                <div className="historical-winners">
                  <h5 className="mb-4 text-center">Annual House Cup Winners</h5>
                  
                  <ListGroup>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="year">2023</span>
                        <span className="winner-name ms-3">🦁 Gryffindor</span>
                      </div>
                      <Badge bg="danger" pill>964 points</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="year">2022</span>
                        <span className="winner-name ms-3">🐍 Slytherin</span>
                      </div>
                      <Badge bg="success" pill>892 points</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="year">2021</span>
                        <span className="winner-name ms-3">🦅 Ravenclaw</span>
                      </div>
                      <Badge bg="info" pill>917 points</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="year">2020</span>
                        <span className="winner-name ms-3">🦡 Hufflepuff</span>
                      </div>
                      <Badge bg="warning" pill>876 points</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="year">2019</span>
                        <span className="winner-name ms-3">🐍 Slytherin</span>
                      </div>
                      <Badge bg="success" pill>931 points</Badge>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default AppAbout;
