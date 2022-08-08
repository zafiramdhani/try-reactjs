const Greet = props => {
  const {name, heroName} = props;
  return (
    <div>
      <h1>Hey, {name} you're The {heroName}</h1>
      {props.children}
    </div>
  )
}

// OTHER WAY TO DESTRUCTURE PROPS
// const Greet = ({name, heroName}) => {
//   return (
//     <div>
//       <h1>Hey, {name} you're The {heroName}</h1>
//     </div>
//   )
// }

export default Greet;