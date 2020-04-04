import React from 'react';
import withTooltip from './withTooltip';
import EleDesc from './EleDesc';

const BaseHighlightEle = ({
  size=[316, 58],
  bgSrc = 'https://picsum.photos/316/58'
}) => {
  return (
    <div className="highlight-element">
      <style jsx>{`
      .highlight-element {
        position: relative;
        width: ${size[0]}px;
        height: ${size[1]}px;
        background-size: cover;
        background: url(${bgSrc});
      }

      .highlight-element::before,
      .highlight-element::after {
        content: '';
        width: ${size[0]}px;
        position: absolute;
      }

      .highlight-element::before {
        height: ${size[1]}px;
        background: rgba(254, 181, 117, 0.5);
      }

      .highlight-element::after {
        height: ${size[1] / 3.2}px;
        bottom: -${size[1] / 3.2}px;
        background: rgba(152, 189, 227, 0.8);
      }
      `}</style>
    </div>
  )
};

const HighlightEle = withTooltip(BaseHighlightEle);

export default ({ eleName, eleClass, size, ...rest }) => {
  return (
    <HighlightEle
      size={size}
      tooltip={
        <EleDesc
          tagName={eleName}
          selector={eleClass}
          size={size}
        />
      }
      {...rest}
    />
  )
};

