import React, { Component } from 'react';

class CounterClassWithStateExample extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };  
  }

  render() {
    return (
      <div>
        <h2>ClassCount: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default CounterClassWithStateExample;
