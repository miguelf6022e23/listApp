import React, { Component } from 'react';
import "./SignUp.css";

console.log(!(/\S+@\S+\.\S+/.test('123@123.123')));

class SignUp extends Component {

	state = {
		email: '',
		username: '',
		password: '',
		confPassword: ''
	};

	inputChange = event => {
	    event.preventDefault();
	    console.log(event.target.value+' | '+event.target.id);
	    this.setState({
	      [event.target.id]: event.target.value
	    });
	    console.log(this.state);
	};

	submitInfo = () => {
		if (this.state.password !== this.state.confPassword) {
			alert('Error: Passwords do not match')
		} else if (!(/\S+@\S+\.\S+/.test(this.state.email))) {
			alert('Error: Invalid email')
		}else if (this.state.email === '' || this.state.username === '' || this.state.password === '') {
			alert('Error: All fields must be filled')
		} else {
			window.location.href = '/'
		}
	};

	render() {

		return (
			<div className="center" onChange={this.inputChange}>
				<h1 className='text-center'>Sign Up</h1>
				<div>
					<span className='label-side'>Email:</span>
					<input className='input-side' id='email' />
				</div>
				<div className='upper-margin'>
					<span className='label-side'>User Name:</span>
					<input className='input-side' id='username' />
				</div>
				<div className='upper-margin'>
					<span className='label-side'>Password:</span>
					<input className='input-side' id='password' />
				</div>
				<div className='upper-margin'>
					<span className='label-side'>Confirm Password:</span>
					<input className='input-side' id='confPassword' />
				</div>
				<div className='text-center upper-margin'>
					<button type="button" onClick={this.submitInfo} className="btn btn-default btn-sm btn-success text-center">
		            	<span>Sign Up</span> 
	            	</button>
	            </div>
	            <div className='text-center upper-margin'>
	            	<a href='/'>Back to sign in</a>
	            </div>
			</div>
		);
	}

}

export default SignUp;