function ConditionalRenderingJSXGreeting(props) {
    return (
      <div>
        {props.showMessage && <p>Welcome to React Learning!</p>}
      </div>
    );
  }

  export default ConditionalRenderingJSXGreeting;