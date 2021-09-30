import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active loader">
      <div className="ui massive text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
