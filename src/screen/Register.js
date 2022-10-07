import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Register() {
  return (
    <div>
      <NavBar/>
      <form>
        <div className="container-1">
          <div className="banner">
          <h1>SIGN UP</h1>
        </div>

    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>username</b></label>
          <input type="text" placeholder="Enter username" name="username" required />
          
          
    

    <label for="email"><b>email</b></label>
          <input type="text" placeholder="Enter valid email" name="email" required />
        
          

    <label for="password"><b>password</b></label>
    <input type="password" placeholder="Password" name="password" required />

    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <div className="clearfix-1">
      <button type="button-1" className="cancelbtn-1">Cancel</button>
      <button type="submit" className="signupbtn-1"><Link to="/register">Sign Up</Link></button>
    </div>
      </div>
      <div className="container">
    <span className="paaa">I Already have an account<Link to="/">Login</Link></span>
        </div>
      </form>
      </div>
  );
}

export default Register;
