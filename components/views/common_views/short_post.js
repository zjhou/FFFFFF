import React from 'react';

import Frame from '../../Frame';
import HTML from '../../Html';

const customMarkdownStyle = `
  color: #535353;
  font-family: Songti TC !important;
  line-height: 1.76 !important;
`;

export const renderPostContent = (p) => () => {
  return (
    <div className="post-content">
      <HTML md={p.content} style={customMarkdownStyle} />
      <style jsx>{`
        .post-content {
          width: 355px;
        }
      `}</style>
    </div>
  )
};

export const ShortPost = ({ post, leftRenderer = () => null }) => {
  return (
    <Frame
      RHCenter
      RVCenter
      LHCenter
      LVCenter
      prevPageSrc="/content"
      leftRenderer={leftRenderer}
      rightRenderer={renderPostContent(post)}
    />
  )
};

export default () => null;
