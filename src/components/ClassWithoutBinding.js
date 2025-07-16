import React, { Component } from 'react';

class ClassWithoutBinding extends Component {
    constructor() {
      super();
      this.state = { message: 'Welcome!' };
    }
  
    showMessage() {
      alert(this.state.message); // ❌ this is undefined
    }
  
    render() {
      return <button onClick={this.showMessage}>Show</button>;
    }
  }
  
  export default ClassWithoutBinding;