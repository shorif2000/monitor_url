import React from 'react';
import './App.css';
//import TrafficLightContainer from './components/TrafficLightContainer';
import Configuration from './components/Configuration';

function App() {
  return (
    <div className="App">
	<Configuration url={`/`} />
    </div>
  );
}

export default App;
