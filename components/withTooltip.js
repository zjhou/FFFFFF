import React from 'react';

const withTooltip = (Comp) => {
  return ({
    tooltip='HELLO',
    ...rest
  }) => {
    return (
      <div className="tooltip">
        <div className="tooltip-content">
          <div className="tooltip-content-inner">
            {tooltip}
          </div>
        </div>
        <div className="tooltip-main">
          {<Comp {...rest} />}
        </div>
        <style jsx>{`
          .tooltip {
            display: inline-flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .tooltip-content {
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
            border-radius: 3px;
            font-size: 12px;
            position: relative;
            margin-bottom: 8px;
            z-index: 0;
          }

          .tooltip-content::before {
            content: '';
            display: inline-block;
            position: absolute;
            z-index: 0;
            width: 12px;
            height: 12px;
            background: #FFFFFF;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
            transform: rotate(-45deg);
            bottom: -6px;
            left: 12px;
          }

          .tooltip-content-inner {
            background: #fff;
            border-radius: 3px;
            padding: 3px 7px;
            position: relative;
            height: 23px;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: arial;
          }
        `}</style>
      </div>
    )
  }
};

export default withTooltip;