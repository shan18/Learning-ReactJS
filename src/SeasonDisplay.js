import React from 'react';

const getSeason = (lat, month) => {
  // Date() returns month with 0-indexed values
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'; // lat > 0 for northern hemisphere
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === 'winter' ? "Burr, it's chilly!" : "Let's hit the beach!";
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
