import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import '../styles/blog.css';

const blogData = [
  {
    id: 1,
    image: require('../assets/images/blog4.jpg'),
    time: '20 Nov 2024',
    title: 'Fantastic Beasts: The Ultimate Collection',
    description: 'All three Fantastic Beasts films in one marathon event with exclusive interviews and unreleased deleted scenes.',
    category: 'Marathon',
    duration: '413 min',
    rating: 'PG-13',
    link: '/movie/fantastic-beasts-collection',
    trailer: 'https://www.youtube.com/embed/ViuDsy7yb8M'
  },
  {
    id: 2,
    image: require('../assets/images/blog2.jpg'),
    time: '10 Nov 2024',
    title: 'The Half-Blood Prince - Director\'s Commentary',
    description: 'Discover the secrets behind the making of this pivotal chapter with exclusive director\'s commentary and behind-the-scenes footage.',
    category: 'Special Event',
    duration: '153 min',
    rating: 'PG-13',
    link: '/movie/half-blood-prince',
    trailer: 'https://www.youtube.com/embed/JYLdTuL9Wjw'
  },
  {
    id: 3,
    image: require('../assets/images/blog3.jpg'),
    time: '07 Nov 2024',
    title: 'The Prisoner of Azkaban - 20th Anniversary',
    description: 'Celebrating two decades since this groundbreaking film changed the visual language of the franchise with Alfonso Cuarón\'s direction.',
    category: 'Anniversary',
    duration: '142 min',
    rating: 'PG',
    link: '/movie/prisoner-of-azkaban',
    trailer: 'https://www.youtube.com/embed/lAxgztbYDbs'
  },
  {
    id: 4,
    image: require('../assets/images/blog1.jpg'),
    time: '15 Nov 2024',
    title: 'The Goblet of Fire - IMAX Experience',
    description: 'Experience the Triwizard Tournament in breathtaking IMAX quality with enhanced visual effects and remastered audio.',
    category: 'Theatrical Release',
    duration: '157 min',
    rating: 'PG-13',
    link: '/movie/goblet-of-fire',
    trailer: 'https://www.youtube.com/embed/3EGojp4Hh6I'
  },
  {
    id: 5,
    image: require('../assets/images/blog5.jpg'),
    time: '25 Nov 2024',
    title: 'The Order of the Phoenix - Behind the Scenes',
    description: 'An exclusive behind-the-scenes look at the making of The Order of the Phoenix with cast and crew interviews.',
    category: 'Documentary',
    duration: '138 min',
    rating: 'PG-13',
    link: '/movie/order-of-the-phoenix',
    trailer: 'https://www.youtube.com/embed/5wzQJ5gJw3E'
  },
  {
    id: 6,
    image: require('../assets/images/blog6.jpg'),
    time: '30 Nov 2024',
    title: 'The Deathly Hallows - Part 2: The Final Battle',
    description: 'Relive the epic conclusion of the Harry Potter saga with a special screening of The Deathly Hallows - Part 2.',
    category: 'Special Screening',
    duration: '130 min',
    rating: 'PG-13',
    link: '/movie/deathly-hallows-part-2',
    trailer: 'https://www.youtube.com/embed/mObK5XD8udk'
  }
];

const featuredNews = [
  {
    title: "HBO's 'Potter' Series Begins Casting",
    date: "17 Nov 2024",
    snippet: "HBO has officially begun the casting process for its highly anticipated Harry Potter television series, set to reimagine J.K. Rowling's beloved books."
  },
  {
    title: "Wizarding World Experience Coming to Major Cities",
    date: "12 Nov 2024",
    snippet: "Warner Bros. announces an immersive Wizarding World touring experience featuring original props, costumes, and interactive elements."
  }
];

function AppBlog() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [visibleItems, setVisibleItems] = useState(3);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const handleClose = () => setShowModal(false);
  const handleShow = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  // Calculate countdown to release date (October 11, 2024)
  useEffect(() => {
    const releaseDate = new Date('October 11, 2024 00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = releaseDate - now;
      
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    // Initial update
    updateCountdown();
    
    // Set interval for updating countdown
    const interval = setInterval(updateCountdown, 1000);
    
    // Cleanup
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 992) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };
    
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  // Variants for framer-motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="blog" className="block blog-block">
      <div className="magical-particles"></div>
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="title-holder"
        >
          <h1>The Wizarding World Returns</h1>
          <div className="subtitle">Experience the Magic in Theaters & Coming Soon to HBO</div>
        </motion.div>
        
        <div className="featured-content">
          <Carousel className="hero-carousel" indicators={true} controls={true}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assets/images/bg-21.jpg')}
                alt="Harry Potter 20th Anniversary"
              />
              <Carousel.Caption>
                <h3>Back to Hogwarts Celebration</h3>
                <p>All eight Harry Potter films returning to theaters nationwide this fall</p>
                <Button variant="outline-light" className="btn-hero">Learn More</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assets/images/bg-22.jpg')}
                alt="New HBO Series"
              />
              <Carousel.Caption>
                <h3>HBO Original Series Coming 2025</h3>
                <p>A faithful adaptation bringing the beloved books to life like never before</p>
                <Button variant="outline-light" className="btn-hero">Subscribe for Updates</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        
        <div className="info-banner">
          <div className="countdown">
            <div className="digit-box">
              <span className="number">{countdown.days}</span>
              <span className="label">Days</span>
            </div>
            <div className="digit-box">
              <span className="number">{countdown.hours}</span>
              <span className="label">Hours</span>
            </div>
            <div className="digit-box">
              <span className="number">{countdown.minutes}</span>
              <span className="label">Minutes</span>
            </div>
            <div className="digit-box">
              <span className="number">{countdown.seconds}</span>
              <span className="label">Seconds</span>
            </div>
            <div className="countdown-text">Until the first theatrical re-release</div>
          </div>
        </div>
        
        <Row className="mt-5">
          <Col lg={8}>
            <motion.div 
              className="content-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="card-header">
                <br></br>
                <br></br>
                <h2>The Magic Reborn</h2>

                <div className="card-icon">
                  <i className="fas fa-wand-sparkles"></i>
                </div>
              </div>
              <div className="card-body-content">
                <p className="content-text">
                  Warner Bros. Pictures proudly presents the complete <strong>Harry Potter</strong> film collection returning to theaters worldwide as part of the "Back to Hogwarts" celebration. Experience all eight iconic films, from "Harry Potter and the Sorcerer's Stone" to "Harry Potter and the Deathly Hallows - Part 2," remastered and enhanced for modern cinema standards.
                </p>
                <p className="content-text">
                  Beginning October 11, 2024, theaters nationwide will offer these beloved classics in multiple formats, including standard digital projection, IMAX, Dolby Cinema, and select 3D screenings. Each theatrical release will feature exclusive behind-the-scenes content and filmmaker introductions never before seen by audiences.
                </p>
                <div className="format-badges">
                  <span className="format-badge imax">IMAX</span>
                  <span className="format-badge dolby">DOLBY CINEMA</span>
                  <span className="format-badge digital">DIGITAL</span>
                  <span className="format-badge realD">REAL D 3D</span>
                </div>
                <Button variant="primary" className="mt-4 btn-full">
                  Find Theaters Near You <i className="fas fa-location-arrow"></i>
                </Button>
              </div>
            </motion.div>
          </Col>
          <Col lg={4}>
            <div className="news-sidebar">
              <div className="sidebar-header">
                <h3>Latest Updates</h3>
                <div className="header-icon">
                  <i className="fas fa-newspaper"></i>
                </div>
              </div>
              {featuredNews.map((news, index) => (
                <motion.div 
                  className="news-item" 
                  key={`news-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  <span className="news-date">{news.date}</span>
                  <h4>{news.title}</h4>
                  <p>{news.snippet}</p>
                  <a href="#" className="news-link">Read Full Article <i className="fas fa-arrow-right"></i></a>
                </motion.div>
              ))}
              <div className="sidebar-footer">
                <Button variant="outline-light" className="btn-subscribe">
                  <i className="fas fa-envelope-open"></i> Subscribe to Updates
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="section-divider">
          <div className="divider-icon">
            <i className="fas fa-hat-wizard"></i>
          </div>
        </div>
        
        <div className="section-header">
          <h2 className="section-title">Featured Screenings</h2>
          <p className="section-subtitle">Experience the magic on the big screen with these special events</p>
        </div>
        
        <motion.div 
          className="movie-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row>
            {blogData.slice(0, visibleItems).map(movie => (
              <Col md={6} lg={4} key={movie.id}>
                <motion.div 
                  className='holder'
                  variants={itemVariants}
                >
                  <Card className="blog-card">
                    <div className="card-image-wrapper">
                      <Card.Img variant="top" src={movie.image} />
                      <div className="card-overlay">
                        <Button 
                          variant="light" 
                          className="btn-play"
                          onClick={() => handleShow(movie)}
                        >
                          <i className="fas fa-play"></i>
                        </Button>
                      </div>
                      <Badge className="category-badge">{movie.category}</Badge>
                    </div>
                    <Card.Body>
                      <div className="card-meta">
                        <time>{movie.time}</time>
                        <span className="duration"><i className="far fa-clock"></i> {movie.duration}</span>
                        <span className="rating"><i className="fas fa-star"></i> {movie.rating}</span>
                      </div>
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Text>{movie.description}</Card.Text>
                      <div className="card-actions">
                        <a href={movie.link} className="btn btn-primary">Get Tickets <i className="fas fa-ticket-alt"></i></a>
                        <Button 
                          variant="outline-secondary" 
                          className="btn-trailer"
                          onClick={() => handleShow(movie)}
                        >
                          <i className="fas fa-film"></i> Trailer
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
        
        {blogData.length > visibleItems && (
          <div className="text-center mt-4">
            <Button 
              variant="outline-light" 
              className="btn-view-all"
              onClick={() => setVisibleItems(prev => prev === blogData.length ? 3 : blogData.length)}
            >
              {visibleItems === blogData.length ? 'Show Less' : 'View All Screenings'} <i className={`fas fa-chevron-${visibleItems === blogData.length ? 'up' : 'down'}`}></i>
            </Button>
          </div>
        )}
        
        <div className="newsletter-section">
          <div className="newsletter-wrapper">
            <div className="newsletter-content">
              <h3>Stay Updated on Wizarding World News</h3>
              <p>Subscribe to our newsletter for exclusive content, early access tickets, and magical announcements</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="form-control" />
                <Button variant="primary">Subscribe <i className="fas fa-wand-sparkles"></i></Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <Modal show={showModal} onHide={handleClose} size="lg" centered className="trailer-modal">
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.title} - Official Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMovie && (
            <div className="ratio ratio-16x9">
              <iframe
                src={selectedMovie.trailer}
                title={`${selectedMovie.title} trailer`}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {selectedMovie && (
            <Button variant="primary" href={selectedMovie.link}>
              Get Tickets
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default AppBlog;