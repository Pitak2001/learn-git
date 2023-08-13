import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { loginStyles } from '../styles/LoginStyles';

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authContext.login(email, password);
      history.push('/dashboard');
    } catch (err) {
      setError('Failed to log in');
    }
  };

  return (
    <div style={loginStyles.container}>
      <form id="login-form" onSubmit={handleSubmit} style={loginStyles.form}>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={loginStyles.input}
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={loginStyles.input}
        />
        <button type="submit" style={loginStyles.button}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;