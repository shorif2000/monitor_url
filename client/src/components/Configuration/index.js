import React from 'react';
import TrafficLightContainer from '../TrafficLightContainer';

class Configuration extends React.Component {

  render(){
    const { url } = this.props;
    console.log(url);
    return (<><TrafficLightContainer url={url} /></>);
  }
}

export default Configuration; 
