import React from 'react';
import Frame from '../../../../components/Frame';
import HTML from '../../../../components/Html';

const customMarkdownStyle = `
  color: #535353;
  font-family: Songti TC !important;
  line-height: 1.76 !important;
`;

const renderPostContent = (p) => () => {
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
    <Frame
      RHCenter
      RVCenter
      LHCenter
      LVCenter
      prevPageSrc="/content"
      leftRenderer={render404}
      rightRenderer={renderPostContent(post)}
    />
  )
};

export default WhatHappened;
