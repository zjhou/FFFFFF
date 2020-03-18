const style = () => {
  return (
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
    `}</style>
  )
}

const Frame = ({
  leftRenderer = () => null,
  rightRenderer = () => null,
}) => {
  return (
    <div className="frame">
      <div className="left">
        <div>
          {leftRenderer()}
        </div>
      </div>
      <div className="right">
        <div>
          {rightRenderer()}
        </div>
      </div>
      {style()}
    </div>
  )
}

export default Frame;
