import React from 'react';
import Cover from '../../Cover';
import {IMG_RES, ROUTES} from '../../../constants';
import Frame from '../../Frame';

const SweetheartCake = () => {
  return (
    <Frame
      fullMode
      showMidLine
      nextPageSrc={ROUTES.content}
    >
      <Cover
        bgSrc={IMG_RES.sweetHeartCake}
        title="Sweetheart Cake"
        subTitle="made by MOON"
        titleSize={32}
      />
    </Frame>
  )
};

export default SweetheartCake;
