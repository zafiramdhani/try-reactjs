import { Component } from 'react'

class ClickClass extends Component {
  clickHandler() {
    console.log('Class | Button Clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click this event</button>
      </div>
    )
  }
}

export default ClickClass;