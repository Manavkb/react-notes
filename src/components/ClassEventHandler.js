import React, { Component } from 'react';

class ClassEventHandler extends Component {
  handleClick() {
    alert("Button clicked from class!");
  }

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default ClassEventHandler;