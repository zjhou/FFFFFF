import React from 'react';
import X from './X';

const Size = ({
  size = [0, 0], fontColor = 'black', fontSize = 12, margin = 3
}) => {
  return (
    <div className="size">
      {size[0]}
      <X color={fontColor} size={fontSize / 2} margin={margin} />
      {size[1]}
      <style jsx>{`
        .size {
          display: inline-flex;
          align-items: center;
          font-family: Arial;
          color: ${fontColor}
        } 
      `}</style>
    </div>
  )
};

export default Size;