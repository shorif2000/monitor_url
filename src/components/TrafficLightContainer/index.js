import React from 'react';
import TrafficLight from '../TrafficLight';
import {connect} from 'react-redux';
import {loadUrlStatus} from "../../actions";
//import {withPolling} from "../Polling";
//import Polling from "../Polling/polling";
import { bindActionCreators } from 'redux'; 

class TrafficLightContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      redOn: true,
      yellowOn: false,
      greenOn: false,
    }
  }
  
  componentDidMount(){
console.log("componentDidMount")
const {pollingAction, duration, url} = this.props
    //withPolling(this.props.loadUrlStatus(this.props.url),1)
    /*
    const {pollingAction, duration, url} = this.props
    this.dataPolling = setInterval(
                    () => {
                        this.props.loadUrlStatus(url);
                    },
                    10000);
*/
this.props.loadUrlStatus(url);
  };

  componentWillUnmount() {
                clearInterval(this.dataPolling);
            }

  render() {
    console.log(this.props)
    return (
      <TrafficLight
        Size={100}
        onRedClick={() => this.setState({ redOn: !this.state.redOn })}
        onGreenClick={() => this.setState({ greenOn: !this.state.greenOn })}
        RedOn={this.state.redOn}
        GreenOn={this.state.greenOn}
      />
    )
  }
}

const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
	loadUrlStatus
    },
    dispatch
  );
};

export default (
    connect(mapStateToProps, mapDispatchToProps)(TrafficLightContainer));
