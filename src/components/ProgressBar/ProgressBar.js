import React, { Component } from 'react';
import {
    Progress
} from "reactstrap";

class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            incr: 5,
            loopTime: 500,
            maxPercent: 80,
            percent: 0,
        }
    }

    componentDidMount() {
        // triggers the first step and triggers next step after current is done
        if (this.props.start) this.startProgressing();
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.start && nextProps.start) this.startProgressing();
    }

    startProgressing() {
        (function poll(self) {
            if (self.state.percent === 100) return;
            if (self.props.result) return self.setState({ percent: 100, status: self.props.result.pass ? "success" : "danger" });
            if (self.state.percent < self.state.maxPercent) {
                self.setState(
                    { percent: self.state.percent + self.state.incr },
                    () => setTimeout(() => poll(self), self.state.loopTime)
                )
            }
        })(this);
    }

    render() {
        return (
            <Progress
                animated
                barClassName={this.props.barClassName}
                color={this.state.percent === 100 ? this.state.status : "info"}
                value={this.state.percent}
            />
        )
    }
}

export default ProgressBar;
