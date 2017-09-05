import React, { Component } from 'react';
import { Result, Spinner } from '../index';

class RunState extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { result, results, running, status } = this.props;
        return (
            <div>{
                running ?
                    <Spinner />
                :
                    <Result
                        results={results}
                        result={result}
                        status={status} />
            }</div>
        )
    }
}

export default RunState;
