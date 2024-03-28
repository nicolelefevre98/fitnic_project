import React from 'react';
import BottomMenu from './BottomMenu';
import { Link } from 'react-router-dom';
import data from '../data/dummydata.json';
import '../style/profile.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import myImage from '../img/profile.JPG';

function Profile() {
    const user = data.users[0];
    const { userData } = user;
    return (
        <div className="profile-container">
            <Link to="/home" className="chevron-link">
                <FontAwesomeIcon icon={faChevronLeft} size="2x" />
            </Link>
            <Link to="/frontpage" className="logout-link">
                <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
            </Link>
            <div className="profile-box">
                <h1 className="profile-title">Min Profil</h1>
                <img src={myImage} alt="Profile" className="profile-image" />
                <h2 className="profile-sub">{userData.name}</h2>
            </div>
            <BottomMenu />
        </div>
    );
}

export default Profile;