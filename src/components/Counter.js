import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  increment() {
    // this.setState({
    //   count: this.state.count + 1
    // }, () => console.log('Callback value', this.state.count))

    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  multipleByFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h2>Count = {this.state.count}</h2>
        <button onClick={() => this.multipleByFive()}>Add more yoo</button>
      </div>
    )
  }
}

export default Counter;