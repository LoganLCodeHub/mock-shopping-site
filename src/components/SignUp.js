import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Optional: Add a CSS file for styling

function SignUp() {
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between sign-up and sign-in
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle sign-up logic
      console.log('Signing up with:', email, password);
      // Simulate successful sign-up
      navigate('/');
    } else {
      // Handle sign-in logic
      console.log('Signing in with:', email, password);
      // Simulate successful sign-in
      navigate('/');
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="sign-up">
      <h1>{isSignUp ? 'Create an Account' : 'Sign In'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button onClick={toggleMode}>
        {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
      </button>
    </div>
  );
}

export default SignUp;
