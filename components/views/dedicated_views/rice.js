import React from 'react';

import Frame from '../../Frame';
import Cover from '../../Cover';
import {IMG_RES} from '../../../constants';

const Rice = () => {
  return (
    <Frame
      nextPageSrc="/content"
      leftRenderer={() => (
        <Cover
          bgSrc={IMG_RES.rice}
        />
      )}
    />
  )
};

export default Rice;
