import React from 'react';

import WhatHappened from './dedicated_views/what_happened'
import OldDays from './dedicated_views/old_days';
import ShortPost from './common_views/short_post';

const DefaultRender = (p) => <ShortPost post={p} />;

export const POST_VIEW_MAPPING = {
  '5dfa130dfaf15f90ace99731': WhatHappened,
  '5dfe527e151378b95355530d': OldDays,

  '5dfe5227151378b95355530c': DefaultRender,
  '5dfe52ab151378b95355530e': DefaultRender,
};

export default (props) => POST_VIEW_MAPPING[props.id];
