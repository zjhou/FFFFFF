import React from 'react';
import Frame from '../../Frame';
import HighlightEle from '../../HighlightEle';
import {IMG_RES} from '../../../constants';

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
      leftRenderer={() =>
        <HighlightEle
          bgSrc={IMG_RES.dogBehindTheWall}
          size={[329, 60]}
          bgPosY="520px"
          eleName="img"
          eleClass="dog-behind-the-wall"
        />
      }
      LHCenter
      LVCenter
    />
  )
};

export default OldDays;
