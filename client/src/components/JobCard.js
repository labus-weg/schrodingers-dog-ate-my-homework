// src/components/JobCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>
        {job.title} <FontAwesomeIcon icon={faBriefcase} />
      </h3>
      <p>
        <FontAwesomeIcon icon={faLocationArrow} /> {job.location}
      </p>
    </div>
  );
};

export default JobCard;
