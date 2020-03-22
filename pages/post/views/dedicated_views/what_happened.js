import React from 'react';
import ShortPost from '../common_views/short_post';

const render404 = () => {
  return (
    <pre className="not-found">
      404
      <style>{` pre.not-found {color: #e0e0e0} `}</style>
    </pre>
  )
};

const WhatHappened = (post) => {
  return (
    <ShortPost
      post={post}
      leftRenderer={render404}
    />
  );
};

export default WhatHappened;
