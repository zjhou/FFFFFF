import React from 'react';

const X = ({ color = 'black', size = 10, margin = 5}) => {
  return (
    <div className="x">
      <style jsx>
        {`
          .x {
            position: relative;
            width: ${size}px;
            height: ${size}px;
            margin: 0 ${margin}px;
          }
          
          .x::before,
          .x::after {
            position: absolute;
            top: ${size / 2 - 1}px;
            content: '';
            display: block;
            background: ${color};
            height: 1px;
            width: ${size}px;
          }
          
          .x::before {
            transform: rotate(45deg);

          }
          
          .x::after {
            transform: rotate(-45deg);
          }
        `}
      </style>
    </div>
  )
};

export default X;