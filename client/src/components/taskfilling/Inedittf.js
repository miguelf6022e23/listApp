import React from 'react';
import { Container } from '../../components/Grid';

export const Inedittf = ({ name, deadline, priority, description}) => 
	<Container>
		<div>
		  <h3><input type='text' placeholder='Name here' defaultValue={name} id='inEditName'  /></h3>

		  <span>
		    <b>Due:</b>
		    <input type='text' placeholder='mm/dd/yyyy' id='inEditDeadline' defaultValue={' '+deadline.split('-')[1]+'/'+deadline.split('-')[2].split('T')[0]+'/'+deadline.split('-')[0]} />
		  </span>

		  <span><b>Priority:</b>
		  	<input type='text' placeholder='1-3' id='inEditPriority'  defaultValue={priority}/>
		  </span>
		</div>

		<br />

		<div><b>Description:</b></div>

		<div>
		  <textarea rows='4' cols='40' id='inEditDescription' defaultValue={description} />
		</div>
	</Container>;