import React from 'react';
import { Container } from '../../components/Grid';

export const Newtf = () => 
	<Container>
		<div>
		  <h3><input type='text' placeholder='Name here' id='newName' defaultValue=''/></h3>

		  <span>
		    <b>Due:</b>
		    <input type='text' placeholder='mm/dd/yyyy' id='newDeadline' />
		  </span>
		  
		  <span><b>Priority:</b>
		  	<input type='text' placeholder='1-3' id='newPriority' />
		  </span>
		
		</div>
		<br />
		<div><b>Description:</b></div>
		<div>
		  <textarea rows='4' cols='40' id='newDescription' />
		</div>

	</Container>;