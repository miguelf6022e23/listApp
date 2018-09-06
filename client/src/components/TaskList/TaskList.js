import React from 'react';
import { List } from '../../components/List';
import { NormalTask } from '../../components/NormalTask';
import {InEditTaskForm} from '../../components/InEditTaskForm';

export const TaskList = ({ tasks, inEdit, inputChange, setInEdit, submitEdits, completeTask, loaded, stateDeadline, dateChange }) =>
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
	          		stateDeadline={stateDeadline}
	          		dateChange={dateChange}
	          	/>	        
	        </div>
	        ):(
	        !task.completed ? (
            <NormalTask 
              	name={task.name} 
              	deadline={task.deadline} 
              	priority={task.priority.toString()} 
              	description={task.description}
              	setInEdit={setInEdit}
              	completeTask={completeTask} 
              	key={task._id}
              	taskid={task._id}
            />
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