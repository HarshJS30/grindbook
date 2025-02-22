import React, { useState } from 'react';
import coverImage from '../assets/hey.png';
import logo from '../assets/logoo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/dashboard');
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Something up on our Side");
    }
  };

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
          <h2>Welcome Back to GrindBook</h2>
          <h6>Please enter your details to log in</h6>
          {error && <p className="error">{error}</p>}
          <form className='form' onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your Email" 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <label>Password</label>
            <div className="password-container">
              <input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="Enter your Password" 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button type="submit">Log in</button>
            <Link className='p' to={'/signup'}>New to GrindBook? Signup fast</Link>
            <div className="broken-line">
              <div className="line"></div>
              <span className="or">Or</span>
              <div className="line"></div>
            </div>
            <Link className='link'>Log in using Google</Link>
          </form>
        </div>
      </div>
    </>
  );
}
