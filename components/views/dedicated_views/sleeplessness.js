import React from 'react';

import { ShortPost } from '../common_views/short_post';
import { IMG_RES} from '../../../constants';
import HighlightEle from '../../HighlightEle';

const Image = () => {
  return (
    <HighlightEle
      bgSrc={IMG_RES.onion}
      size={[300, 200]}
      // bgPosY="520px"
      eleName="img"
      eleClass="onion"
    />
  );
};

const Sleeplessness = (post) => {
  return (
    <ShortPost
      leftRenderer={Image}
      post={post}
    />
  )
};

export default Sleeplessness;
