import React from 'react';
import Welcome from './components/Welcome'; // Import the component
import WelcomeArrow from './components/WelcomeArrow';
import WelcomeClass from './components/WelcomeClass';
import WelcomeProps from './components/WelcomeProps';
import UserCard from './components/UserCard';
import Greeting from './components/GreetingProps';
import HobbyList from './components/HobbyListProps';
import './App.css';
import WelcomeStyle from './components/WelcomeStyle';
import CounterClassWithStateExample from './components/CounterClassWithStateExample';
import CounterFunctionWithHooks from './components/CounterFunctionWithHooks';
import UserDetailsWithoutDestructuring from './components/UserDetailsWithoutDestructuring';
import UserDetailsWithDestructuring from './components/UserDetailsWithDestructuring.js';
import FunctionEventHandler from './components/FunctionEventHandler.js';
import ClassEventHandler from './components/ClassEventHandler.js';
import ClassWithoutBinding from './components/ClassWithoutBinding.js';
import ClassWithBinding from './components/ClassWithBinding.js';
import ChildComponent from './components/ChildComponent.js';
import ConditionalRenderingPureJSGreeting from './components/ConditionalRenderingPureJSGreeting';
import ConditionalRenderingJSXGreeting from './components/ConditionalRenderingJSXGreeting.js';
import ListRendering from './components/ListRendering.js';
import ListRenderingKeyValue from './components/ListRenderingKeyValue.js';
import FormHandling from './components/FormHandling.js';
import FormHandlingMultiData from './components/FormHandlingMultiData.js';

const headingStyle = {
  color: 'blue',
  fontSize: '24px',
};

function App() {

  // Method as props
  const handleGreet = (name) => {
    alert(`Hello, ${name} from Parent!`);
  };

  return (
    <div>
      <h1>Hello World from React!</h1>
      <Welcome />
      <WelcomeArrow/>
      <WelcomeClass/>
      <WelcomeProps name="Manav" />
      <WelcomeProps name="Aditi" />
      <WelcomeProps name="Rahul" />
      <UserCard name="Manav" age={31} location="Varanasi" />
      <UserCard name="Aditi" age={28} location="Bangalore" />
      <UserCard name="Ankit" age={35} location="Delhi" />
      <Greeting name="Manav" timeOfDay="Morning" />
      <Greeting name="Aditi" timeOfDay="Evening" />

      <HobbyList name="Manav" hobbies={['Reading', 'Cycling', 'Singing']} />
      <HobbyList name="Aditi" hobbies={['Sketching', 'Coding']} />

      <h1 style={headingStyle}>Hello Inline Style</h1>
      <h1 className="heading">Styled using CSS</h1>
      <WelcomeStyle /> 
      <CounterClassWithStateExample/>
      <CounterFunctionWithHooks/>
      <UserDetailsWithoutDestructuring name = "Vishal" city = "Banglore"/>
      <UserDetailsWithDestructuring name = "Nidhi" city = "Jaipur"/>
      <FunctionEventHandler/>
      <ClassEventHandler/>
      <ClassWithoutBinding/>
      <ClassWithBinding/>
      <ChildComponent greetHandler={handleGreet} />
      <ConditionalRenderingPureJSGreeting isLoggedIn={false} />
      <ConditionalRenderingJSXGreeting showMessage={true} />
      <ListRendering/>
      <ListRenderingKeyValue/>
      <FormHandlingMultiData/>
      
      
    </div>
  );
}

export default App;

