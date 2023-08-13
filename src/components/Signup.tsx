import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { SignupStyles } from '../styles/SignupStyles';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { signup } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(email, password);
      history.push('/dashboard');
    } catch (err) {
      setError('Failed to create an account');
    }
  };

  return (
    <div style={SignupStyles.container}>
      <form id="signup-form" onSubmit={handleSubmit} style={SignupStyles.form}>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={SignupStyles.input}
          placeholder="Email"
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={SignupStyles.input}
          placeholder="Password"
        />
        <button type="submit" style={SignupStyles.button}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;