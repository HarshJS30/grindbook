import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import coverImage from '../assets/hey.png';
import logo from '../assets/logoo.png';
import { HashLoader } from 'react-spinners'; // Import HashLoader

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true); // Set loading to true
    setError('');

    try {
      const response = await fetch('https://grindbook.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/dashboard');
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false); // Set loading to false
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
          width: '100%',
          position: 'relative', // Added relative positioning
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="signup"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.img
            src={logo}
            alt="GrindBook Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Welcome to GrindBook
          </motion.h2>
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Please enter your details to sign in
          </motion.h6>
          <motion.form
            className="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {error && (
              <motion.div
                style={{
                  color: '#dc2626',
                  fontSize: '12px',
                  background: 'none',
                  boxShadow: 'none',
                  border: 'none',
                  marginBottom: '8px',
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}
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
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="eye-icon"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              {loading ? (
                <HashLoader size={30} color={'#3498db'} loading={loading} />
              ) : (
                'Sign in'
              )}
            </motion.button>
            <Link className="p" to={'/login'}>
              Already Have an account? Log in
            </Link>
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
              className="link"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              Sign in using Google
            </motion.Link>
          </motion.form>
          {loading && (
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: 10,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <HashLoader size={60} color={'#3498db'} loading={loading} />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}