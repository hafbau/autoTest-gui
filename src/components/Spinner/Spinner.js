import React, { Component } from 'react';
import { HashSpinner } from 'react-spinners';

class RunState extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Spinner />
                <Result />
            </div>
        )
    }
}

export default RunState;
