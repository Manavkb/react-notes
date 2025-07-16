function ConditionalRenderingPureJSGreeting(props) {
    const isLoggedIn = props.isLoggedIn;
  
    if (isLoggedIn) {
      return <h1>Welcome Back!</h1>;
    } else {
      return <h1>Please Log In</h1>;
    }
  }

  export default ConditionalRenderingPureJSGreeting;