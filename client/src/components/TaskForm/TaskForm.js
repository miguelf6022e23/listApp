import React from 'react';

export const TaskForm = ({ name, deadline, priority, description, form}) => 
	<div>
		<div>
		  <h3><input type='text' placeholder={name==='' ? ('Name here'):(name)} defaultValue={name} id={form+'-name'}  /></h3>

		  <span>
		    <b>Due:</b>
		    <input type='text' placeholder='mm/dd/yyyy' id={form+'-deadline'} defaultValue={deadline===''?(''):(' '+deadline.split('-')[1]+'/'+deadline.split('-')[2].split('T')[0]+'/'+deadline.split('-')[0])} />
		  </span>

		  <span><b>Priority:</b>
		  	<input type='text' placeholder='1-3' id={form+'-priority'}  defaultValue={priority}/>
		  </span>
		</div>

		<br />

		<div><b>Description:</b></div>

		<div>
		  <textarea rows='4' cols='40' id={form+'-description'} defaultValue={description} />
		</div>
	</div>;