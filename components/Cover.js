const CoverStyle = (props) => {
  const {
    backgroundImageSrc: src
  } = props;

  return (
    <style jsx>{`
      .cover {
        width: 100%;
        height: 100%;
        background-image: url(${src});
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
  )
}

const Cover = (props) => {
  const {
    title = '',
    subTitle = '',
    bgSrc = '',
  } = props;

  return (
    <div className="cover">
      <div className="text">
        <div className="title">{title}</div>
        <div className="subTitle">{subTitle}</div>
      </div>
      <CoverStyle backgroundImageSrc={bgSrc} />
    </div>
  )
}

export default Cover;
