import React from 'react';
import { ListItem } from '../../components/List';
import {TaskForm} from '../../components/TaskForm'

export const InEditTaskForm = ({ name, deadline, priority, description, submitEdits, setInEdit, taskid, stateDeadline, dateChange}) => 
	<ListItem>
		
		<TaskForm 
			name={name}
			deadline={deadline}
			priority={priority}
			description={description}
			form='inEdit'
			stateDeadline={stateDeadline}
			dateChange={dateChange}
		/>

		<button type="button" className="btn btn-default btn-danger btn-sm edit-btn" taskid={taskid} onClick={() => setInEdit('')}>
        	<span className="glyphicon glyphicon-remove"></span> 
      	</button>
      	<button type="button" className="btn btn-default btn-sm btn-success complete-btn" onClick={() => submitEdits(taskid)}>
        	<span>Submit changes</span> 
      	</button>
	</ListItem>;