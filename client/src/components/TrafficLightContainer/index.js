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
      flash: false
    };
    this.interval = null;
    this.dataPolling = null;
  }

  componentDidMount() {
    const { duration, url } = this.props;
    this.setState({ start: Date.now() });

    this.dataPolling = setInterval(() => {
      const { intervals } = this.state;
      this.props.loadUrlStatus(url, intervals);
      this.setState({ intervals: intervals + 1 });
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
      status: { data }
    } = nextProps;
    const { start, time, redCounter, intervals } = prevState;

    if (data.interval !== undefined && data.interval !== intervals) {
      let flashing = false;
      if (data.statusCode === 200) {
        return {
          greenOn: true,
          redOn: false,
          start: Date.now(),
          flash: flashing,
          redCounter: 0
        };
      } else if (data.statusCode !== 200) {
        if (redCounter >= 3) {
          if ((time - start) / 1000 > 5) {
            flashing = true;
          }
          return {
            greenOn: false,
            redOn: true,
            redCounter: redCounter + 1,
            flash: flashing
          };
        } else {
          return {
            greenOn: false,
            redOn: true,
            redCounter: redCounter + 1,
            flash: flashing
          };
        }
      }
    }
    return null;
  }

  render() {
    return (
      <TrafficLight
        Size={50}
        RedOn={this.state.redOn}
        GreenOn={this.state.greenOn}
        flash={this.state.flash}
        time={this.state.time}
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

