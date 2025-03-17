import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../styles/teams.css';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/team1.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Harry James Potter',
    designation: 'Head of British Auror Office',
    description: 'The Boy Who Lived and defeated Lord Voldemort, now leading the Auror Office with courage and integrity.',
    house: 'G'
  },
  {
    id: 2,
    image: require('../assets/images/team2.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Hermione Granger',
    designation: 'Magical Law Enforcement',
    description: 'The brightest witch of her age, now revolutionizing magical law with her intelligence and compassion.',
    house: 'G'
  },
  {
    id: 3,
    image: require('../assets/images/team3.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Ron Weasley',
    designation: 'Auror (formerly)',
    description: 'Loyal friend and strategist who now helps run Weasleys Wizard Wheezes with his brother George.',
    house: 'G'
  },
  {
    id: 4,
    image: require('../assets/images/team4.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Ginny Weasley',
    designation: 'Professional Quidditch Player',
    description: 'Former Holyhead Harpies star and current senior Quidditch correspondent for the Daily Prophet.',
    house: 'G'
  },
  {
    id: 5,
    image: require('../assets/images/team5.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Neville Longbottom',
    designation: 'Herbology Professor',
    description: 'From shy student to brave hero, now shaping the next generation at Hogwarts School of Witchcraft and Wizardry.',
    house: 'G'
  },
  {
    id: 6,
    image: require('../assets/images/team6.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Luna Lovegood',
    designation: 'Magizoologist',
    description: 'Eccentric and insightful naturalist, discovering magical creatures around the world.',
    house: 'R'
  },
  {
    id: 7,
    image: require('../assets/images/team7.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Lord Voldemort',
    designation: 'Dark Wizard (Deceased)',
    description: 'The darkest wizard of all time who terrorized the wizarding world until his defeat in 1998.',
    house: 'S'
  },
  {
    id: 8,
    image: require('../assets/images/team8.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Draco Malfoy',
    designation: 'Unspeakable',
    description: 'Former Death Eater who found redemption and now works in the Department of Mysteries.',
    house: 'S'
  }
];

function AppTeams() {
  // Function to get house badge background color
  const getHouseBadgeStyle = (house) => {
    switch(house) {
      case 'G': return { backgroundColor: '#740001' }; // Gryffindor
      case 'S': return { backgroundColor: '#1a472a' }; // Slytherin
      case 'R': return { backgroundColor: '#0e1a40' }; // Ravenclaw
      case 'H': return { backgroundColor: '#ecb939' }; // Hufflepuff
      default: return { backgroundColor: '#6a0dad' };
    }
  };

  return (
    <section id="teams" className="block teams-block">
      <Container>
        <div className="title-holder">
          <h1>Wizarding World Characters</h1>
          <div className="subtitle">Harry Potter & Associates</div>
        </div>
        <Row>
          {teamsData.map(team => (
            <Col md={6} lg={3} key={team.id}>
              <div className='team-card'>
                <div className='image'>
                  <Image src={team.image} fluid />
                  <div className='overlay'>
                    <div className='socials'>
                      <ul>
                        <li><a href={team.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href={team.twitterLink}><i className="fab fa-twitter"></i></a></li>
                        <li><a href={team.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  {team.house && (
                    <div className='house-badge' style={getHouseBadgeStyle(team.house)}>
                      {team.house}
                    </div>
                  )}
                </div>
                <div className='content'>
                  <h3>{team.name}</h3>
                  <span className='designation'>{team.designation}</span>
                  <p>{team.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AppTeams;