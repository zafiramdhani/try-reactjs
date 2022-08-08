import { Component } from "react";

class Welcome extends Component {
  render() {
    // DESTRUCTURING NECESSARY PROPS
    const {name, heroName} = this.props;
    // const {state1, state2} = this.state;

    return <h1>Welcome {name}, he is {heroName}</h1>
  }
}

export default Welcome;