import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../styles/blog.css';
const blogData = [
  {
    id: 1,
    image: require('../assets/images/blog1.jpg'),
    time: '15 Nov 2024',
    title: 'Episode-4-The Goblet of Fire',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/blog2.jpg'),
    time: '10 Nov 2024',
    title: 'Episode-6-The Half-Blood Prince',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/blog3.jpg'),
    time: '07 Nov 2024',
    title: 'Episode-3-The Prisoner of Azkaban',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.twitter.com'
  }
];

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container>
        <div className="title-holder">
          <h1>Harry Potter Movie & TV Show</h1>
          <div className="subtitle">The Magic Reborn - New Adventures Await...!</div>
        </div>
        <p className="intro-text">
          The upcoming Harry Potter series is being re-released in theaters as part of the "Back to Hogwarts" celebration. The series includes all eight films, starting with "Harry Potter and the Sorcerer's Stone," and they are scheduled to be shown nationwide in various formats like 2D, IMAX, and Dolby Cinema starting from October 11, 2024.
        </p>
        <Row>
          {blogData.map(blog => (
            <Col sm={4} key={blog.id}>
              <div className='holder'>
                <Card className="blog-card">
                  <Card.Img variant="top" src={blog.image} />
                  <Card.Body>
                    <time>{blog.time}</time>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.description}</Card.Text>
                    <a href={blog.link} className="btn btn-primary">Watch Now <i className="fas fa-chevron-right"></i></a>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AppBlog;