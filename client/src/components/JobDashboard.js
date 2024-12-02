// src/components/JobDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(err => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <li key={index}>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
            </li>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </ul>
    </div>
  );
};

export default JobDashboard;
