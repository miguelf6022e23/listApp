import React, { Component } from 'react';
import "./SignUp.css";

class SignUp extends Component {

	render() {
		return (
			<div className="center">
				<h1 className='text-center'>Sign Up</h1>
				<div>
					<span className='label-side'>Email:</span>
					<input className='input-side' />
				</div>
				<div className='upper-margin'>
					<span className='label-side'>User Name:</span>
					<input className='input-side' />
				</div>
				<div className='upper-margin'>
					<span className='label-side'>Password:</span>
					<input className='input-side' />
				</div>
				<div className='upper-margin'>
					<span className='label-side'>Confirm Password:</span>
					<input className='input-side' />
				</div>
				<div className='text-center upper-margin'>
					<a href='Home'><button type="button" className="btn btn-default btn-sm btn-success text-center">
		            	<span>Sign Up</span> 
	            	</button></a>
	            </div>
	            <div className='text-center upper-margin'>
	            	<a href='/'>Back to sign in</a>
	            </div>
			</div>
		);
	}

}

export default SignUp;