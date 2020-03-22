import React from 'react';
import Frame from '../../../../components/Frame';

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
        }
        
        .old-days .placeholder {
          height: 14px;
          width: 72px;
          background-color: black; 
          position: absolute;
          bottom: 6px;
          right: 1px;
        }
      `}</style>
    </div>
  )
};

const OldDays = (post) => {
  return (
    <Frame
      prevPageSrc="/content"
      borderColor="black"
      rightRenderer={renderOldDays(post)}
    />
  )
};

export default OldDays;
