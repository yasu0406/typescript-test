import React, { useState } from 'react';
import { Container } from './app.style';

function App() {
  const [ counter, setCounter ] = useState<number>(0);
  const increase = () => {
    setCounter(counter+1);
  }
  return (
    <Container className="App" data-test='component-big-component'>
      <h1>The counter {counter}</h1>
      <button onClick={increase}>
        Click
      </button>
    </Container>
  );
}

export default App;
