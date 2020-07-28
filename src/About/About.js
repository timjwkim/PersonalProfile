import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Container>
          <Row>
            <Col>col 1</Col>
            <Col>col 2</Col>
          </Row>
        </Container>
        Hello! My name is Timothy Kim. I am a current Junior at the University of
        Michigan studying Computer Science. I enjoy
      </div>
    )
  }
}

export default About;
