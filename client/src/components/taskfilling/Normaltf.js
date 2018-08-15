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
	</Container>;