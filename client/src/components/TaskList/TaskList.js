import React from 'react';
import { List, ListItem } from '../../components/List';
import { Normaltf } from '../../components/taskfilling';
import {InEditTaskForm} from '../../components/InEditTaskForm';

export const TaskList = ({ tasks, inEdit, inputChange, setInEdit, submitEdits, completeTask, loaded }) =>
	tasks.length ? (
	  <List>
	    {tasks.map(task =>
	      inEdit === task._id ?
	        (
	        <div onChange={inputChange} key={task._id} >
	          	<InEditTaskForm 
	          		name={task.name} 
	          		deadline={task.deadline} 
	          		priority={task.priority} 
	          		description={task.description} 
	          		taskid={task._id}
	          		submitEdits={submitEdits}
	          		setInEdit={setInEdit}
	          	/>	        
	        </div>
	        ):(
	        !task.completed ? (
	          <ListItem key={task._id}>
	            <div>
	              <Normaltf name={task.name} deadline={task.deadline} priority={task.priority.toString()} description={task.description} taskid={task._id} />
	              <button type="button" className="btn btn-default btn-info btn-sm edit-btn" taskid={task._id} onClick={() => setInEdit(task._id)}>
	                <span className="glyphicon glyphicon-pencil"></span> 
	              </button>
	              <button type="button" className="btn btn-default btn-sm btn-success complete-btn" onClick={() =>completeTask(task._id)} >
	                <span className="glyphicon glyphicon-ok"></span> 
	              </button>
	            </div>
	          </ListItem>
	        ) : (
	          <div key={task._id}></div>
	        )
	      )
	    )} 
	  </List>
	) : (
	  loaded ? (
	      <h3>No Tasks To Display</h3>
	    ):(
	      <h3>Loading tasks</h3>
	    )
	);