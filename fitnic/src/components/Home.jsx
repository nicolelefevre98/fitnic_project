import React from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css'; 
import data from '../data/dummydata.json';
import myImage from '../img/nicole.png';
import CircularProgress from './CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import BottomMenu from './BottomMenu';

const Home = () => {
    const user = data.users[0];
    const { userData } = user;
    const { currentWeight, goalWeight } = userData;
    const progress = ((currentWeight / goalWeight) * 100).toFixed(0);

  return (
    <div className="container">
        <div className="welcome-box">
            <div className="text-content">
                <h1>Hej {userData.name}</h1>
                    <p>Velkommen tilbage</p>
            </div>
            <img src={myImage} alt="Welcome" className="welcome-image" />
        </div>
        <div className='info-box'>
            <div className="weights-display">
                <div className="title-home">Vægtmål</div>
                <div className='sub-home'>Du har taget på: {currentWeight} kg</div> 
                <div className='sub-home'>Mål: {goalWeight} kg</div> 
            </div>
            <div className="circular-progress-container">
                <CircularProgress progress={progress} currentWeight={currentWeight} />
            </div>
        </div>
        <Link to="/exercises" className="plan-box">
            <h2>Træningsplan</h2>
            <button className="plan-button"> Alle træningsplaner
            <FontAwesomeIcon icon={faChevronRight} className="icon-right" /> 
            </button>
        </Link>
        <Link to="/food" className="food-box">
            <h2>Kostplan</h2>
            <button className="food-button"> Alle kostplaner
            <FontAwesomeIcon icon={faChevronRight} className="icon-right" /> 
            </button>
        </Link>
        <BottomMenu />
    </div>
  );
};

export default Home;