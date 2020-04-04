import React from 'react';
import Size from './Size';

const EleDesc = ({
  size = [0, 0],
  tagName = 'div',
  selector = '.example'
}) => {
  return (
    <div className="element-description">
      <span className="element-selector">
        <span className="element-selector-tag-name">{tagName}</span>
        <span className="element-selector-class-name">{selector}</span>
      </span>
      <Size
        size={size}
        fontColor="#8b8b8b"
      />
      <style jsx>{`
      .element-description {
        font-family: arial;
      }

      .element-selector {
        font-weight: bolder;
        margin-right: 10px;
        font-size: 14px;
      }

      .element-selector-tag-name {
        color: #830A73;
      }

      .element-selector-class-name {
        color: #3F26A5;
      }
      `}</style>
    </div>
  )
};

export default EleDesc;
