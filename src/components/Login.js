import React from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import amazonlogo from '../amazonlogo.png';


function Login() {



    return (
        <div className="login">
           <Link to="/">
              <img 
                className="login_logo"
                src={amazonlogo}
                // src ="https://upload.wikimedia.org/wikipedia/common/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt =""
                /> 
           </Link> 
           <div className="login_container">
              <h1>Sign in</h1>
              <form>
                <h5>E-mail</h5>
                <input type="email" />
                <h5>Password</h5>
                <input type="password" />
                <button type="submit" className="login_signin">Sign in</button>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button type="submit" className="login_register">Create your Amazon account</button>
              </form>    
           </div> 
        </div>
    )
}

export default Login;
