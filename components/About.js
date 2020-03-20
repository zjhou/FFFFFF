const About = (props) => {
  return (
    <div className="about">
      {props.info || '前端程序员'}
      <style jsx>{`
        .about {
          position: absolute;
          bottom: 40px;
          right: 40px;
          font-size: 12px;
          color: #c4c4c4;

          text-align: right;
        }
      `}</style>
    </div>
  )
}

export default About;

