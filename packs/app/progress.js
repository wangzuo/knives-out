import React from 'react';

const Progress = ({ d, m }) => (
  <div className="progress">
    <div className="progress-bar" style={{ width: `${d / m * 100}%` }} />
  </div>
);

Progress.defaultProps = {
  m: 100
};

export default Progress;
