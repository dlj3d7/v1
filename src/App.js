import React from 'react';
import './App.scss';
import HelloWorld from './components/HelloWorld/HelloWorld';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Omaha"/>
      <HelloWorld name="Nebraska"/>
      <HelloWorld name="World"/>
    </div>);
};

export default App;
