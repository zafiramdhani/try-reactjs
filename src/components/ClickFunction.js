// FUNCTIONAL EVENT HANDLING
function ClickFunction() {
  function clickHandler() {
    console.log('Functional | Button Clicked');
  }

  return (
    <div>
      {/* DO NOT add parentheses (). Event handler is a function and NOT a function call */}
      <button onClick={clickHandler}>Click this event</button>
    </div>
  )
}

export default ClickFunction;