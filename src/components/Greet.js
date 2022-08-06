const Greet = (props) => {
  return (
    <div>
      <h1>Hey, {props.name} you're The {props.heroName}</h1>
      {props.children}
    </div>
  )
}

export default Greet;