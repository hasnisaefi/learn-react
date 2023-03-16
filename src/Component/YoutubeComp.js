const Youtube = (props)=> {
  return <div style={{
    display: 'inline-block',
    padding: '10px',
    fontSize: '12px'
  }}>
    <div>
      <img src="https://placeimg.com/200/152/tech" alt=""/>
      <p>{props.time}</p>
    </div>
    <p>{props.title}</p>
    <p>{props.desc}</p>
  </div>
}

Youtube.defaultProps= {
  time: "00.00"
}

export default Youtube