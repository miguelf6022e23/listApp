import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/Grid';

class Home extends Component {
  /*state = {
    articles: [],
    queryTerm: '',
    beginDate: '',
    endDate: ''
  };*/

  render() {
    return (
      <Row>
          <Col size="md-3">
            <Jumbotron>
              <h2>Folders</h2>
            </Jumbotron>
          </Col>
          <Col size="md-9">
            <Jumbotron>
              <h1>Tasks</h1>
            </Jumbotron>
          </Col>
        </Row>
      
      );
  }
}

export default Home;