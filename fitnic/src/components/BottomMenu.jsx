import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDumbbell, faUtensils, faUser } from '@fortawesome/free-solid-svg-icons';
import '../style/bottomMenu.css';

const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <Link to="/home" className="menu-item">
        <FontAwesomeIcon icon={faHome} className="menu-icon" />
        <span>Home</span>
      </Link>
      <Link to="/exercises" className="menu-item">
        <FontAwesomeIcon icon={faDumbbell} className="menu-icon" />
        <span>Workout</span>
      </Link>
      <Link to="/food" className="menu-item">
        <FontAwesomeIcon icon={faUtensils} className="menu-icon" />
        <span>Food</span>
      </Link>
      <Link to="/profile" className="menu-item">
        <FontAwesomeIcon icon={faUser} className="menu-icon" />
        <span>Profile</span>
      </Link>
    </div>
  );
};

export default BottomMenu;