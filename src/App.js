import React from 'react';
import './App.scss';
/* import HelloWorld from './components/HelloWorld/HelloWorld'; */
/* import HelloWorldList from './components/HelloWorldList/HelloWorldList'; */
import Palette from './components/Palette/Palette';
/* import PaletteRamp from './components/PaletteRamp/PaletteRamp'; */
import Glitch from './components/Glitch/Glitch';


const App = () => {
  return (
    <div className="App">
    <Glitch text="SIRIS" />
    <Palette hue="200" alt="testing"/>
    <Palette hue="0" alt="testing"/>
    <Palette hue="100" alt="testing"/>
    </div>);
};

export default App;
