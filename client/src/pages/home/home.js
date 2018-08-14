import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';
import { List, ListItem } from '../../components/List';

class Home extends Component {
  state = {
    tasks: []
    
  };

  getTasks = () => {
    API.getTasks()
      .then(res => {
        console.log(res);
        this.setState({
          tasks: res.data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getTasks()
  }

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
            <button type="button" class="btn btn-sm">
                <span class="glyphicon glyphicon-plus"></span> New Task 
            </button>
            {this.state.tasks.length ? (
              <List>
                {this.state.tasks.map(task => (
                  <ListItem key={task._id}>
                    <div>
                      <h3>{task.name}</h3>

                      <span>
                        <b>Due:</b>
                        {' '+task.deadline.split('-')[1]+'/'+task.deadline.split('-')[2].split('T')[0]+'/'+task.deadline.split('-')[0]}
                      </span>

                      <span><b>Priority:</b>{' '+task.priority}</span>
                    </div>
                    <br />
                    <div><b>{task.description!= '' ? ('Description:'):('')}</b></div>
                    <div>
                      <p>{task.description}</p>
                    </div>
                    <button type="button" class="btn btn-default btn-info btn-sm edit-btn">
                      <span class="glyphicon glyphicon-pencil"></span> 
                    </button>
                    <button type="button" class="btn btn-default btn-sm btn-success complete-btn">
                      <span class="glyphicon glyphicon-ok"></span> 
                    </button>
                  </ListItem>
                ))} 
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      
      );
  }
}

export default Home;