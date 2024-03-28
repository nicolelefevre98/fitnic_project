import React, { useState } from 'react';
import BottomMenu from './BottomMenu';
import data from '../data/dummydata.json';
import '../style/exercises.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Exercises() {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleCardClick = (workoutId) => {
    setSelectedWorkout(workoutId === selectedWorkout ? null : workoutId);
  };

  return (
    <div>
      <h1 className="workout-title">{data.users[0].workoutPlan.title}</h1>
        <div className="workout-container">
          {data.users[0].workoutPlan.workout.map((workout) => (
            <div className="workout-card" key={workout.workoutId} onClick={() => handleCardClick(workout.workoutId)}>
              <img src={workout.imageUrl} alt="" className="workout-image"/>
              <div className="workout-info">
                <h2 className="workout-title">{workout.workoutId}</h2> 
                <FontAwesomeIcon icon={faChevronRight} className="icon-right" /> 
              </div>
              {selectedWorkout === workout.workoutId && (
                <ul>
                  {workout.exercises.map((exercise, index) => (
                    <li key={index}>{exercise}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      <BottomMenu />
    </div>
  );
}

export default Exercises;