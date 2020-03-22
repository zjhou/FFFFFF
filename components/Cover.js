import { IMG_RES } from '../constants';

const Cover = (props) => {
  const {
    title = '',
    subTitle = '',
    bgSrc = IMG_RES.defaultCoverBg,
  } = props;

  return (
    <div className="cover">
      <div className="text">
        <div className="title">{title}</div>
        <div className="subTitle">{subTitle}</div>
      </div>
      <style jsx>{`
        .cover {
          width: calc(100% - 1px);
          height: 100%;
          background-image: url(${bgSrc});
          background-size: cover;
        }

        .text {
          padding-top: 43px;
          padding-left: 43px;
          color: #fff;
        }

        .title {
          font-size: 64px;
        }

        .subTitle {
          font-size: 14px;
          padding-left: 5px;
          margin-top: -10px;
        }
      `}</style>
    </div>
  )
}

export default Cover;
