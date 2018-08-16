import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row } from '../../components/Grid';
import API from '../../utils/API';
import { List, ListItem } from '../../components/List';
import { Newtf, Inedittf, Normaltf } from '../../components/taskfilling';

class Home extends Component {
  state = {
    tasks: [],
    inEdit: '',
    newTask: false,
    loaded:false,
    newName: '',
    newDeadline: '',
    newPriority: '',
    newDescription: '',
    inEditName: '',
    inEditDeadline: '',
    inEditPriority: '',
    inEditDescription: ''

  };

  getTasks = () => {
    API.getTasks()
      .then(res => {
        console.log(res);
        this.setState({
          tasks: res.data,
          loaded:true
        });
        console.log(this.state)
      })
      .catch(err => console.log(err));
  };

  newTaskToggle = () => {
    
    this.setState({
          newTask: !this.state.newTask,
          newName: '',
          newDeadline: '',
          newPriority: '',
          newDescription: ''
        });
    this.render();
  };

  submitNewTask = () => {
    var taskdata = {
      name: this.state.newName,
      deadline: this.state.newDeadline,
      priority: this.state.newPriority,
      description: this.state.newDescription
    }
    console.log(taskdata);
    API.createTask(taskdata)
    .then(res => {
      this.getTasks();
      this.newTaskToggle();
    });
  };

  setInEdit = (id) => {
    this.setState({
          inEdit: id
        });

    id==''? (
      this.setState({
        inEditName: '',
        inEditDeadline: '',
        inEditPriority: '',
        inEditDescription: ''
      })
      ):(
      API.getOneTask(id)
      .then(res => {
        this.setState({
          inEditName: res.data.name,
          inEditDeadline: res.data.deadline,
          inEditPriority: res.data.priority,
          inEditDescription: res.data.description
        });
      })
      )

    console.log(this.state);
  };

  submitEdits = (id) => {
    var taskdata = {
      name: this.state.inEditName,
      deadline: this.state.inEditDeadline,
      priority: this.state.inEditPriority,
      description: this.state.inEditDescription
    }
    console.log(taskdata);
    API.updateOneTask(id, taskdata)
    .then(res => {
      this.getTasks();
      this.setInEdit('');
    });
  };

  inputChange = event => {
    event.preventDefault();
    console.log(event.target.value+' | '+event.target.id);
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(this.state);
  };

  completeTask = (id) => {
    API.updateOneTask(id, {completed: true}).then(res => {
      this.getTasks();
    })};


  componentDidMount() {
    this.getTasks()
  };

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

                {this.state.newTask ? (
                  <button type="button" className="btn btn-sm btn-danger" onClick={this.newTaskToggle}>
                    <span><span className="glyphicon glyphicon-remove"></span> Cancel</span>
                  </button> 
                  ):(
                  <button type="button" className="btn btn-sm" onClick={this.newTaskToggle}>
                    <span><span className="glyphicon glyphicon-plus"></span> New Task</span>
                  </button>
                  )}
              
            {this.state.newTask ? (
            <List>
              <div onChange={this.inputChange}>
                <ListItem>
                  <Newtf />
                  <button type="button" type='multiline-text' className="btn btn-default btn-sm btn-success complete-btn" onClick={this.submitNewTask}>
                    <span>Submit</span> 
                  </button>
                </ListItem> 
              </div>
            </List>
            ):(
            <br />
            )}

            {this.state.tasks.length ? (
              <List>
                {this.state.tasks.map(task => (
                  this.state.inEdit == task._id ?
                    (
                      <ListItem key={task._id}>
                        <div onChange={this.inputChange}>
                          <Inedittf name={task.name} deadline={task.deadline} priority={task.priority.toString()} description={task.description} taskid={task._id} />
                          <button type="button" className="btn btn-default btn-danger btn-sm edit-btn" taskid={task._id} onClick={() => this.setInEdit('')}>
                            <span className="glyphicon glyphicon-remove"></span> 
                          </button>
                          <button type="button" className="btn btn-default btn-sm btn-success complete-btn" onClick={() => this.submitEdits(task._id)}>
                            <span>Submit changes</span> 
                          </button>
                        </div>
                      </ListItem>
                    ):(
                    !task.completed ? (
                      <ListItem key={task._id}>
                        <div>
                          <Normaltf name={task.name} deadline={task.deadline} priority={task.priority.toString()} description={task.description} taskid={task._id} />
                          <button type="button" className="btn btn-default btn-info btn-sm edit-btn" taskid={task._id} onClick={() => this.setInEdit(task._id)}>
                            <span className="glyphicon glyphicon-pencil"></span> 
                          </button>
                          <button type="button" className="btn btn-default btn-sm btn-success complete-btn" onClick={() =>this.completeTask(task._id)} >
                            <span className="glyphicon glyphicon-ok"></span> 
                          </button>
                        </div>
                      </ListItem>
                    ) : (
                      <div key={task._id}></div>
                    )
                  )
                ))} 
              </List>
            ) : (
              this.state.loaded ? (
                  <h3>No Tasks To Display</h3>
                ):(
                  <h3>Loading tasks</h3>
                )
              
            
            )}
          </Col>
        </Row>
      
      );
  }
}

export default Home;