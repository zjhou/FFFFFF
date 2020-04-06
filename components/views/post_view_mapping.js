import React from 'react';

import WhatHappened from './dedicated_views/what_happened'
import OldDays from './dedicated_views/old_days';
import Rice from './dedicated_views/rice';

import { ShortPost } from './common_views/short_post';
import SweetheartCake from './dedicated_views/sweetheart_cake';

const DefaultRender = (p) => <ShortPost post={p} />;

export const POST_VIEW_MAPPING = {
  '5dfa130dfaf15f90ace99731': WhatHappened,
  '5dfe527e151378b95355530d': OldDays,
  '5e3ffe8bdcaaca180c846aa2': Rice,
  '5e4bf9d20b9203089a387a26': SweetheartCake,

  '5dfe5227151378b95355530c': DefaultRender,

};

export default (props) => POST_VIEW_MAPPING[props.id];
