import React from 'react';
import { Button } from './components/Button';

function App() {
  return (
    <>
      <Button color="green" background="pink">Green Button</Button>
      <Button>Default Button</Button>
      <Button name="primary">Primary Button</Button>
    </>
  );
}

export default App;
