import React, { Component } from 'react';

class ClassWithBinding extends Component {
    constructor() {
      super();
      this.state = { message: 'Welcome!' };
      this.showMessage = this.showMessage.bind(this); // bind here
    }
  
    showMessage() {
      alert(this.state.message); // ❌ this is undefined
    }
  
    render() {
      return <button onClick={this.showMessage}>Display</button>;
    }
  }
  
  export default ClassWithBinding;