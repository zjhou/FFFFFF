import { POST_VIEW_MAPPING } from './post_view_mapping'

import NotFound from './common_views/not_found';

export const getPostView = (pid) => {
  return POST_VIEW_MAPPING[pid] || NotFound;
};
