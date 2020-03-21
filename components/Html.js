import React from 'react';
import showdown from 'showdown';

const converter = new showdown.Converter({
  openLinksInNewWindow: true,
  simpleLineBreaks: true
});
converter.setFlavor('github');

const HTML = ({ md, className = '' }) => {
  return (
    <div
      dangerouslySetInnerHTML={{__html: converter.makeHtml(md)}}
      className={`${className} markdown-body`}
    />
  );
};

export default HTML;
