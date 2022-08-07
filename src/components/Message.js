import { Component } from "react";

class Message extends Component {
  constructor() {
    super();  //because we extend component class
    this.state = {
      message: "Welcome visitor"
    }
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing!!"
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe bro</button>
      </div>
    )
  }
}

export default Message;