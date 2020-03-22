import React from 'react';
import Frame from '../../Frame';

const render404 = () => {
  return (
    <pre className="not-found">
      404
      <style>{` pre.not-found {color: #e0e0e0} `}</style>
    </pre>
  )
};

const NotFound = () => (
  <Frame
    RHCenter
    RVCenter
    prevPageSrc="/content"
    rightRenderer={render404}
  />
);

export default NotFound;