import React from 'react';
import PropTypes from 'prop-types';

const ProgressIndicator = ({ completed, total }) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="progress-indicator">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        {percentage}%
      </div>
    </div>
  );
};

ProgressIndicator.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ProgressIndicator;