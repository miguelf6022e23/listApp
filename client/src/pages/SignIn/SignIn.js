import React, { Component } from 'react';
import "./SignIn.css";

class SignIn extends Component {

	render() {
		return (
			<div className="center">
				<h1 className='text-center'>Sign In</h1>
				<div>
					<span className='label-side'>Email:</span>
					<input className='input-side' />
				</div>
				<div className='upper-margin'>
					<span className='label-side'>Password:</span>
					<input className='input-side' />
				</div>
				<div className='text-center upper-margin'>
					<a href='Home'><button type="button" className="btn btn-default btn-sm btn-success text-center">
		            	<span>Sign In</span> 
	            	</button></a>
	            </div>
	            <div className='text-center upper-margin'>
	            	<span>New User?</span><a href='SignUp'>Create Account</a>
	            </div>
			</div>
		);
	}

}

export default SignIn;