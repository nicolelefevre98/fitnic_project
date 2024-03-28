import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/frontpage.css';
import myImage from '../img/nicole.png';
import backgroundImage from '../img/background.jpg'; 

const Frontpage = () => {
    let navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };
  return (
    <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="frontpage-container">
        <h1 className="title">FITNIC</h1>
        <p className="subtitle">UNLEASH YOUR INHIBITIONS</p>
        <button className="login-button" onClick={handleLogin}>Login</button>
        <img src={myImage} alt="Fitnic" className="fitnic-img" />
      </div>
    </div>
  );
};

export default Frontpage;