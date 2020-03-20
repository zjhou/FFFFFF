import Link from 'next/link'

const LinkTo = ({ src }) => (
  <Link href={src} >
    <a className="frame-link">
      <style jsx>{`
        .frame-link {display: block; width: 100%; height: 100%;}
      `}</style>
    </a>
  </Link>
);

const Frame = ({
  leftRenderer = () => null,
  rightRenderer = () => null,
  nextPageSrc = '',
  prevPageSrc = '',
  LHCenter = false,
  LVCenter = false,
  RHCenter = false,
  RVCenter = false,
}) => {

  return (
    <div className="frame">
      <style jsx>{`
        .frame {
          width: 1000px;
          height: 600px;
          border: solid 1px #e0e0e0;
          background-color: #FFFFFF;
          display: flex;
        }
        .left {
          border-right: solid 1px #e0e0e0;
        }
        .left > div {
          ${LHCenter || LVCenter ? 'display: flex;' : ''}
          ${LHCenter ? 'align-items: center;': ''}
          ${LVCenter ? 'justify-content: center;': ''}
        }
        .right > div {
          ${RHCenter || RVCenter ? 'display: flex;' : ''}
          ${RHCenter ? 'align-items: center;': ''}
          ${RVCenter ? 'justify-content: center;': ''}
        }
        .left, .right {
          flex: 1 0 50%;
          display: flex;
          flex-direction: column;
        }
        .left > div, .right > div {
          flex: 1;
          min-height: 1px;
          position: relative;
          overflow: hidden;
        }

        .frame-btn {
          position: absolute;
          top: 0;
          bottom: 0;
          cursor: pointer;
          width: 18px;
          height: 100%;
          background-color: rgba(0, 0, 0, 0);
          transition: all .3s;
          border: solid 1px rgba(255, 255, 255, 0);
        }

        .frame-btn > .frame-link { display: block; width: 18px; height: 100%; }

        .frame-btn:hover {
          background-color: rgba(0, 0, 0, 0.02);
        }

        .left .frame-btn {
          left: 0;
        }

        .left .frame-btn:hover {
          border-right: solid 1px rgba(224, 224, 224, 0.5);
        }

        .right .frame-btn {
          right: 0;
        }

        .right .frame-btn:hover {
          border-left: solid 1px rgba(224, 224, 224, 0.5);
        }
      `}</style>
      <div className="left">
        <div>
          {leftRenderer()}
          {prevPageSrc && (
            <div className="frame-btn ">
              <LinkTo src={prevPageSrc} />
            </div>
          )}
        </div>
      </div>
      <div className="right">
        <div>
          {nextPageSrc && (
            <div className="frame-btn ">
              <LinkTo src={nextPageSrc} />
            </div>
          )}
          {rightRenderer()}
        </div>
      </div>
    </div>
  )
}

export default Frame;
