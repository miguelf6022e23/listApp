import React, { Component } from 'react';
import "./SignIn.css";
import API from '../../utils/API';

class SignIn extends Component {
	state = {
		email: "",
		password: ""
	}

	inputChange = event => {
	    event.preventDefault();
	    this.setState({
	      [event.target.id]: event.target.value
	    });
	};

	submitInfo = () => {
		if (this.state.email === '' || this.state.password === '') {
			alert('Error: All fields must be filled')
		} else {
			let userdata = {
		      ...this.state
		    }
		    API.getOneUser('email',this.state.email).then(res =>
		    	{
		    		sessionStorage.setItem("id",res.data[0]._id)
		    		window.location.href = '/Home'
		    	})
		    }
	};

	render() {
		return (
			<div className="center" onChange={this.inputChange}>
				<h1 className='text-center'>Sign In</h1>
				<div>
					<span className='label-side'>Email:</span>
					<input className='input-side' id='email' />
				</div>
				<div className='upper-margin'>
					<span className='label-side'>Password:</span>
					<input className='input-side' id='password' />
				</div>
				<div className='text-center upper-margin'>
					<button type="button" className="btn btn-default btn-sm btn-success text-center" onClick = {this.submitInfo}>
		            	<span>Sign In</span> 
	            	</button>
	            </div>
	            <div className='text-center upper-margin'>
	            	<span>New User?</span><a href='SignUp'>Create Account</a>
	            </div>
			</div>
		);
	}

}

export default SignIn;