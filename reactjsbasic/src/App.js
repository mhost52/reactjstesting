import React from 'react';
import './App.css';
import Counter from './Counter';
import Button from './Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
      </header>
      <main>
        <p>This is a simple React application.</p>
        <Button label="Click Me" onClick={handleClick} />
        <Counter />
      </main>
    </div>
  );
}

export default App;
