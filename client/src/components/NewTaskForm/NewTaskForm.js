import React from 'react';
import { List, ListItem } from '../../components/List';
import {TaskForm} from '../../components/TaskForm'

export const NewTaskForm = ({ newTask, newTaskToggle, inputChange, submitNewTask }) =>
	newTask ? (
		<div>
  			<button type="button" className="btn btn-sm btn-danger" onClick={newTaskToggle}>
            	<span><span className="glyphicon glyphicon-remove"></span> Cancel</span>
            </button> 
            <List>
              <div onChange={inputChange}>
                <ListItem>
                  <TaskForm 
                    name=''
                    deadline=''
                    priority=''
                    description=''
                    form='newTask'
                  />
                  <button type="button" className="btn btn-default btn-sm btn-success complete-btn" onClick={submitNewTask}>
                    <span>Submit</span> 
                  </button>
                </ListItem> 
              </div>
            </List>
        </div>
	):(
		<div>
			<button type="button" className="btn btn-sm" onClick={newTaskToggle}>
            	<span><span className="glyphicon glyphicon-plus"></span> New Task</span>
          	</button>
			<br />
		</div>
	);
