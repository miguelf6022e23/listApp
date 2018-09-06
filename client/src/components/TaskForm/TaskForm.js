import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const TaskForm = ({ name, deadline, priority, description, form, stateDeadline, dateChange}) => 
	<div>
		<div>
		  <h3><input type='text' placeholder={name==='' ? ('Name here'):(name)} defaultValue={name} id={form+'-name'}  /></h3>

		  <span>
		    <b>Due:</b>
		  	<DatePicker 
			  	id={form+'-deadline'}
			  	selected={stateDeadline}
			  	onSelect={dateChange}
		  	/>
		  </span>

		  <span><b>Priority:</b>
		  	<select id={form+'-priority'} defaultValue={priority}>
		  		<option>1</option>
		  		<option>2</option>
		  		<option>3</option>
		  	</select>
		  </span>
		</div>

		<br />

		<div><b>Description:</b></div>

		<div>
		  <textarea rows='4' cols='40' id={form+'-description'} defaultValue={description} />
		</div>
	</div>;