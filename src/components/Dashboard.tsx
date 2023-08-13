import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { DashboardStyles } from '../styles/DashboardStyles';

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={DashboardStyles.container}>
      <h1 style={DashboardStyles.title}>Dashboard</h1>
      {user ? (
        <div style={DashboardStyles.userInfo}>
          <h2 style={DashboardStyles.username}>Welcome, {user.username}</h2>
          <p style={DashboardStyles.email}>Email: {user.email}</p>
        </div>
      ) : (
        <p style={DashboardStyles.message}>Please log in to see your dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;