import React from 'react';
import Frame from '../../Frame';

const renderOldDays = (p) => () => {
  return (
    <div className="old-days">
      <div className="placeholder"/>
      {p.content}
      <style jsx>{`
        .old-days {
          font-size: 14px;
          line-height: 1.7;
          text-align: justify;
          color: #535353;
          padding: 0 2px;
        }
        
        .old-days .placeholder {
          height: 14px;
          width: 55px;
          background-color: #c4c4c4; 
          position: absolute;
          bottom: 6px;
          right: 2px;
        }
      `}</style>
    </div>
  )
};

const OldDays = (post) => {
  return (
    <Frame
      prevPageSrc="/content"
      rightRenderer={renderOldDays(post)}
    />
  )
};

export default OldDays;
