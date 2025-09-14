function Card({title,description}) {
  return (
    <div style={{border: "1px solid white", padding: "10px", margin: "5px"}}>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Card