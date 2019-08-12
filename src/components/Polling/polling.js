import * as React from 'react';

class Polling extends React.Component {
            componentDidMount() {
const {pollingAction, duration} = this.props
                pollingAction();
                this.dataPolling = setInterval(
                    () => {
                        pollingAction();
                    },
                    duration);
            }
            componentWillUnmount() {
                clearInterval(this.dataPolling);
            }
            render() {
                return <Component {...this.props}/>;
            }
        });
export default Polling;
