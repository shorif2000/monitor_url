import React, { Component } from "react";
import TrafficLight from "../TrafficLight";
import { connect } from "react-redux";
import { loadUrlStatus } from "../../actions/status";
import { bindActionCreators } from "redux";

class TrafficLightContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redOn: false,
      greenOn: false,
      redCounter: 0,
      time: 0,
      start: 0,
      intervals: 0,
      flash: false,
      url: ""
    };
    this.interval = null;
    this.dataPolling = null;
  }

  componentDidMount() {
    const { duration, url } = this.props;
    this.setState({ start: Date.now() });

    this.dataPolling = setInterval(() => {
      const { intervals, disable } = this.state;
      if(!disable){           
        this.props.loadUrlStatus(url, intervals);
        this.setState({ intervals: intervals + 1, url });
      }
    }, parseInt(duration) * 1000);

    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.dataPolling);
    clearInterval(this.interval);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      status: { data, error }
    } = nextProps;
    const { start, time, redCounter, intervals } = prevState;
/*
    if(Object.keys(error).length > 0){
      if(error.message === prevState.error){
        return null;
      }
      return { error: error.message, disable: error.disable}
    }
*/
    if (data !== undefined && prevState.url in data) {
      console.log(data[prevState.url]);
      if (data[prevState.url].interval !== intervals) {
        let flashing = false;
        if (data[prevState.url].statusCode === 200) {
          console.log("green on");
          return {
            greenOn: true,
            redOn: false,
            start: Date.now(),
            flash: flashing,
            redCounter: 0
          };
        } else if (data[prevState.url].statusCode !== 200) {
          if (redCounter >= 3) {
            if ((time - start) / 1000 > 120) {
              flashing = true;
            }
            return {
              greenOn: false,
              redOn: true,
              redCounter: redCounter + 1,
              flash: flashing
            };
          } else {
            console.log("redOn");
            return {
              greenOn: false,
              redOn: true,
              redCounter: redCounter + 1,
              flash: flashing
            };
          }
        }
      }
    }
    return null;
  }

  render() {
    const { redOn, greenOn, flash, time } = this.state;
	  console.log(redOn, greenOn, flash, time)
    return (
      <TrafficLight
        Size={50}
        RedOn={redOn}
        GreenOn={greenOn}
        flash={flash}
        time={time}
      />
    );
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrafficLightContainer);

