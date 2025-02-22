import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      <motion.div 
        className="auth" 
        style={{ 
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100%'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="signup"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img 
            src={logo} 
            alt="GrindBook Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Welcome Back to GrindBook
          </motion.h2>
          <motion.h6 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Please enter your details to log in
          </motion.h6>
          {error && <p className="error">{error}</p>}
          <motion.form 
            className='form' 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
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
            <motion.button 
              type="submit"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              Log in
            </motion.button>
            <Link className='p' to={'/signup'}>New to GrindBook? Signup fast</Link>
            <motion.div 
              className="broken-line"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <div className="line"></div>
              <span className="or">Or</span>
              <div className="line"></div>
            </motion.div>
            <motion.Link 
              className='link'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              Log in using Google
            </motion.Link>
          </motion.form>
        </motion.div>
      </motion.div>
    </>
  );
}
