import React from 'react';
import { Container } from '../../components/Grid';

export const Newtf = () => 
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
		  <p><input /></p>
		</div>
		<button type="button" className="btn btn-default btn-sm btn-success complete-btn">
		  <span>Submit</span> 
		</button>
	</Container>;