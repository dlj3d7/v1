import React from 'react';
import './App.scss';
import HelloWorld from './components/HelloWorld/HelloWorld';
import HelloWorldList from './components/HelloWorldList/HelloWorldList';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="America"/>
      <HelloWorldList/>
    </div>);
};

export default App;
