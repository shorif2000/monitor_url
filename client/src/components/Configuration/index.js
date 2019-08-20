import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadConfig, fetchGroups } from "../../actions/config";
import { Link } from "react-router-dom";
import _ from "lodash";
import TrafficLightContainer from "../TrafficLightContainer";

export class Configuration extends Component {
  componentDidMount() {
    this.props.loadConfig();
    this.props.fetchGroups();
  }

  renderTraffic() {
    const {
      config: { data, groups },
      matches: {
        match: {
          params: { id }
        }
      }
    } = this.props;
    
    if(groups !== undefined && Object.keys(groups).length > 0){
      const items = data[_.mapKeys(groups, "id")[id].name];
      return items.map((k, v) => {
        return (
          <div className="col-xs-12 col-md-3" key={k.url+k.interval_check}>
            <div>
              <TrafficLightContainer url={k.url} duration={k.interval_check} />
            </div>
            <div>{k.url}</div>
          </div>
        );
      });
    }
    return '';
  }

  renderTrafficList(demos) {
    return demos.map((k, v) => {
      return (
        <>
          <ul>
            <li key={k.group_id + k.url + v}>id: {k.group_id}</li>
            <li>url: {k.url}</li>
            <li>interval check: {k.interval_check}</li>
          </ul>
        </>
      );
    });
  }

  renderConfig(data) {
    const {
      config: { groups }
    } = this.props;

    if(groups !== undefined && Object.keys(groups).length > 0){
      return Object.keys(data).map((value, key) => {
        const demos = data[value];
        const group = _.mapKeys(groups, "name")[value];
        return (
          <div className="col-xs-12 col-md-6 col-lg-3 text-left" key={group.id + value + key}>
            <h4>
              <Link to={`/health/${group.id}`}>{value}</Link>
            </h4>
            {this.renderTrafficList(demos)}
          </div>
        );
      });
    }
    return '';
  }

  render() {
    const {
      config: { data, groups, error },
      matches: {
        match: {
          params: { id }
        }
      }
    } = this.props;

    if(
      error !== undefined &&
      Object.keys(error).length > 0 
    ) {
	console.log(error);
	//alert(error.message);    
    }

    if (
      id !== undefined &&
      parseInt(id) > 0 &&
      groups !== undefined &&
      Object.keys(groups).length > 0
    ) {
      return (
        <div className="container-fluid">
          <header>
            <h2 className="text-center top-buffer">
              Configuration {_.mapKeys(groups, "id")[id].name}
            </h2>
          </header>
          <div className="row-fluid">{this.renderTraffic()}</div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <header>
            <h1 className="text-center top-buffer">Health Check</h1>
          </header>
          <div className="row-fluid">
            Page is used to check health of external services. The following
            configurations are available to load
          </div>
          <div className="row-fluid">{this.renderConfig(data)}</div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadConfig, fetchGroups }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configuration);

