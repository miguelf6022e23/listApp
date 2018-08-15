import React from 'react';
import { Container } from '../../components/Grid';

export const Newtf = () => 
	<Container>
		<div>
		  <h3><input type='text' placeholder='Name here' id='newName' /></h3>

		  <span>
		    <b>Due:</b>
		    <input type='text' placeholder='mm/dd/yyyy' id='newDeadline' />
		  </span>
		  
		  <span><b>Priority:</b>
		  	<select id='newPriority'> 
		  		<option value='1'>1</option>
		  		<option value='2' selected="selected">2</option>
		  		<option value='3'>3</option>
		  	</select>
		  </span>
		
		</div>
		<br />
		<div><b>Description:</b></div>
		<div>
		  <textarea rows='4' cols='40' id='newDescription' />
		</div>
		<span><b>Priority:</b><input type='text' placeholder='1-3' id='newPriority' /></span>
		<button type="button" type='multiline-text' className="btn btn-default btn-sm btn-success complete-btn">
		  <span>Submit</span> 
		</button>

	</Container>;