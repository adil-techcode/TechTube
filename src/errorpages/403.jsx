import React from 'react';
import { Link } from 'react-router-dom';


const ForbiddenPage = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const contentStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '2em',
    marginBottom: '10px',
    color: '#721c24', 
  };

  const emojiStyle = {
    fontSize: '4em',
    marginBottom: '20px',
    display: 'block',
  };

  const messageStyle = {
    fontSize: '1.2em',
    color: '#721c24',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <span role="img" aria-label="Warning Emoji" style={emojiStyle}>
          ⚠️
        </span>
        <h1 style={headingStyle}>403 Forbidden</h1>
        <p style={messageStyle}>You don't have permission to access this page.</p>
        <Link to={"/"} > Go Home </Link>


      </div>
    </div>
  );
};

export default ForbiddenPage;
