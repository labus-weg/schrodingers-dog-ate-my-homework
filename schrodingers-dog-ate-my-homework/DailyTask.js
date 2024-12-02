// src/components/DailyTask.js
import React from 'react';

const DailyTask = ({ task }) => {
    return (
        <div className="task">
            <h2>Today's Task</h2>
            <p>{task}</p>
        </div>
    );
};

export default DailyTask;
