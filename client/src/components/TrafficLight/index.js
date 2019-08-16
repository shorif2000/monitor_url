import React, { Component } from "react";
import PropTypes from "prop-types";

const scale = 1 / 0.375;

class TrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flash: false,
      time: 0
    };
    this.interval = null;
    this.flashing = this.flashing.bind(this);
  }

  flashing() {
    const self = this;
    if (self.props.flash) {
      self.setState({ time: Date.now(), flash: !self.state.flash });
    } else {
      self.setState({ time: Date.now(), flash: false });
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.flashing();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      onRedClick,
      onGreenClick,
      RedOn,
      GreenOn,
      Size,
      BlackColor,
      DisabledColor,
      RedColor,
      RedDim,
      GreenColor,
      GreenDim,
      flash,
      ...props
    } = this.props;

    let Redc = "";
    if (flash) {
      if (this.state.flash) {
        Redc = RedColor;
      } else {
        Redc = RedDim;
      }
    } else if (RedOn) {
      Redc = RedColor;
    } else {
      Redc = RedDim;
    }

    return (
      <svg
        width={`${Size}px`}
        height={`${Size * scale}px`}
        viewBox="0 0 60 110"
        version="1.1"
        {...props}
      >
        <defs>
          <circle
            style={{ cursor: onRedClick ? "pointer" : undefined }}
            id="redCirclePath"
            cx="30"
            cy="30"
            r="20"
          />
          <circle
            style={{ cursor: onGreenClick ? "pointer" : undefined }}
            id="greenCirclePath"
            cx="30"
            cy="80"
            r="20"
          />

          <filter
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
            id="shadowFilter"
          >
            <feGaussianBlur
              stdDeviation="3"
              in="SourceAlpha"
              result="shadowBlurInner1"
            />
            <feOffset
              dx="0"
              dy="4"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            />
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
        </defs>
        <rect fill={BlackColor} x="0" y="0" width="60" height="110" rx="8" />

        <use fill={Redc} fillRule="evenodd" xlinkHref="#redCirclePath" />
        <use
          fill={GreenOn ? GreenColor : GreenDim}
          fillRule="evenodd"
          xlinkHref="#greenCirclePath"
        />

        <g>
          <use
            onClick={onRedClick}
            fill="black"
            fillOpacity="1"
            filter="url(#shadowFilter)"
            xlinkHref="#redCirclePath"
          />
          <use
            onClick={onGreenClick}
            fill="black"
            fillOpacity="1"
            filter="url(#shadowFilter)"
            xlinkHref="#greenCirclePath"
          />
        </g>
      </svg>
    );
  }
}

TrafficLight.propTypes = {
  onRedClick: PropTypes.func,
  onGreenClick: PropTypes.func,
  RedOn: PropTypes.bool,
  GreenOn: PropTypes.bool,
  Size: PropTypes.number,
  BlackColor: PropTypes.string,
  DisabledColor: PropTypes.string,
  RedColor: PropTypes.string,
  GreenColor: PropTypes.string
};

TrafficLight.defaultProps = {
  onRedClick: undefined,
  onGreenClick: undefined,
  RedOn: false,
  GreenOn: false,
  Size: 60,
  BlackColor: "#000000",
  DisabledColor: "#4A4A4A",
  RedColor: "#FF0000",
  RedDim: "#FF7777",
  GreenColor: "#48FF00",
  GreenDim: "#C2FFAA",
  flash: false
};

export default TrafficLight;

