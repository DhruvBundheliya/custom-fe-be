import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS for styling
import config from './config.json'; // Import configuration

function App() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Use backend URL from configuration
  const { backendUrl } = config;

  const handleClick = async () => {
    setLoading(true); // Set loading state to true while request is being made
    try {
      const res = await axios.get(`${backendUrl}/api/getQuote`);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
      setResponse('Error occurred while fetching data.');
    } finally {
      setLoading(false); // Set loading state back to false after request is completed
    }
  };

  return (
    <div className="container">
      <h1 className="heading">You are viewing the frontend.</h1>
      <div className="content">
        <p className="info">Need a smile? Click here for a quick mood lifter!</p>
        <button className="button" onClick={handleClick} disabled={loading}>
          {loading ? 'Loading...' : 'Click'}
        </button>
        {response && <p className="response">{response}</p>}
      </div>
    </div>
  );
}

export default App;