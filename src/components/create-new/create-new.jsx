import React from 'react';

import Fade from 'react-bootstrap/Fade';

const ToggleView = ({ show, children }) => {
  console.log(show);
  return (
    <Fade in={show}>
      <div>{children}</div>
    </Fade>
  );
};

export default ToggleView;
