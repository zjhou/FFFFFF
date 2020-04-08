import React from 'react';

const Arrow = ({
  direction, // 'left' / 'right'
  color = '#333',
  size = 5,
  borderSize = 1,
}) => {
  return (
    <div className={`arrow ${direction || ''}`}>
      <style jsx>{`
        .arrow {
          position: relative;
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: ${2 * size}px;
          height: ${2 * size}px;
          opacity: 0.5;
          transition: opacity 0.2s;
        }

        .arrow:hover {
          opacity: 1;
          cursor: pointer;
        }

        .arrow::after {
          content: "";
          width: ${size}px;
          height: ${size}px;
          display: inline-block;
          border: solid ${borderSize}px ${color};
          transform: rotate(45deg);
        }

        .arrow.left::after {
          border-top: none;
          border-right: none;
        }

        .arrow.right::after {
          border-bottom: none;
          border-left: none;
        }

      `}</style>
    </div>
  )
};

export {
  Arrow
}
