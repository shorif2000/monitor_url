import React, { Component } from 'react';
import './App.css';
import Configuration from './components/Configuration';

class App extends Component {

constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
} 

  callAPI() {
    fetch("http://www.banglarelief.org:9010/")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentDidMount() {
    this.callAPI();
}
render(){
  return (
    <div className="App">
	<Configuration url={`/`} />
 <p className="App-intro">;{this.state.apiResponse}</p>
    </div>
  );
}
}

export default App;
