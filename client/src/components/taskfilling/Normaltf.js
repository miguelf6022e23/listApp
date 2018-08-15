import React from 'react';
import { Container } from '../../components/Grid';

export const Normaltf = ({ name, deadline, priority, description}) => 
	<Container>
		<div>
		  <h3>{name}</h3>

		  <span>
		    <b>Due:</b>
		    {' '+deadline.split('-')[1]+'/'+deadline.split('-')[2].split('T')[0]+'/'+deadline.split('-')[0]}
		  </span>

		  <span><b>Priority:</b>{' '+priority}</span>
		</div>
		<br />
		<div><b>{description!== '' ? ('Description:'):('')}</b></div>
		<div>
		  <p>{description}</p>
		</div>
		<button type="button" className="btn btn-default btn-info btn-sm edit-btn">
		  <span className="glyphicon glyphicon-pencil"></span> 
		</button>
		<button type="button" className="btn btn-default btn-sm btn-success complete-btn">
		  <span className="glyphicon glyphicon-ok"></span> 
		</button>
	</Container>;