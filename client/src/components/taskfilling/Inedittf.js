import React from 'react';
import { Container } from '../../components/Grid';

export const Inedittf = ({ name, deadline, priority, description}) => 
	<Container>
		<div>
		  <h3><input /></h3>

		  <span>
		    <b>Due:</b>
		    <input/>
		  </span>

		  <span><b>Priority:</b><input /></span>
		</div>
		<br />
		<div><b>Description:</b></div>
		<div>
		  <input />
		</div>
	</Container>;