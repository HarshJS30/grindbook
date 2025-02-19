import React from 'react';
import coverImage from '../assets/hey.png';
import logo from '../assets/logoo.png';
import {Link} from 'react-router-dom'

export default function Signup() {
    
  return (
    <>
      <div 
        className="auth" 
        style={{ 
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100%'
        }}
      >
        <div className="signup">
            <img src={logo} alt="GrindBook Logo" />
            <h2>Welcome to GrindBook</h2>
            <h6>Please enter your details to sign in</h6>
            <form className='form'>
                <label>Email</label>
                <input type="email" placeholder="Enter your Email" required />
                <label>Password</label>
                <input type='password' placeholder='Enter your Password' required />
                <button>Sign in</button>
                <Link className='p' to={'/login'}>Already Have an account? Log in</Link>
                <div class="broken-line">
                    <div class="line"></div>
                    <span class="or">Or</span>
                    <div class="line"></div>
                </div>
                <Link className='link'>Sign in using Google</Link>
            </form>
        </div>
      </div>
    </>
  );
}
