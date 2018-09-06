import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row } from '../../components/Grid';
import {NewTaskForm} from '../../components/NewTaskForm';
import NewTaskFormFuncs from '../../components/NewTaskForm/NewTaskFormFuncs'
import {TaskList} from '../../components/TaskList';
import TaskListFuncs from '../../components/TaskList/TaskListFuncs'
import moment from 'moment';

class Home extends Component {
  state = {
    tasks: [],
    inEdit: '',
    newTask: false,
    loaded:false,
    newTaskData:{
      name: '',
      deadline: moment(),
      priority: '',
      description: ''
    },
    inEditData:{
      name: '',
      deadline: moment(),
      priority: '',
      description: ''
    }
  };

  newTaskToggle = NewTaskFormFuncs.newTaskToggle.bind(this);
  
  submitNewTask = NewTaskFormFuncs.submitNewTask.bind(this);

  getTasks      = TaskListFuncs.getTasks.bind(this);

  completeTask  = TaskListFuncs.completeTask.bind(this);

  setInEdit     = TaskListFuncs.setInEdit.bind(this);

  submitEdits   = TaskListFuncs.submitEdits.bind(this);

  inputChange = event => {
    if (typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    console.log(event.target.value+' | '+event.target.id);

    let obj = this.state[event.target.id.split('-')[0] + 'Data'];
    obj[[event.target.id.split('-')[1]]] = event.target.value;

    this.setState({
      [event.target.id.split('-')[0] + 'Data']: obj
    });
    console.log(this.state);
  };

  componentDidMount() {
    this.getTasks()
  };

  dateChange = (form)=>{
    return date => {
      console.log(date);
      let obj = this.state[form+'Data'];
      console.log(obj);
      obj.deadline = date;
      console.log(obj);
      this.setState({
        newTaskData: obj
      })
    }
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

            <NewTaskForm 
              newTask={this.state.newTask}  
              newTaskToggle={this.newTaskToggle} 
              inputChange={this.inputChange} 
              submitNewTask={this.submitNewTask}
              stateDeadline={this.state.newTaskData.deadline} 
              dateChange={this.dateChange('newTask')}
            />

            <TaskList 
              tasks={this.state.tasks}
              inEdit={this.state.inEdit}
              inputChange={this.inputChange}
              setInEdit={this.setInEdit}
              submitEdits={this.submitEdits}
              completeTask={this.completeTask}
              loaded={this.state.loaded}
              stateDeadline={this.state.newTaskData.deadline}
              dateChange={this.dateChange('inEdit')}
            />

          </Col>
        </Row>
      
      );
  }
}

export default Home;