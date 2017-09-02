import React, { Component } from 'react';
import { Result, Spinner } from '../components';

class RunState extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>{
                this.props.running ?
                    <Spinner />
                :
                    <Result />
            }</div>
        )
    }
}

export default RunState;
