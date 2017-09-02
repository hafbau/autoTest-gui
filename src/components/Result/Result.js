import React, { Component } from 'react';
import { Result, Spinner } from '../components';

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <StatusIcon />
                <ResultDetail />
            </div>
        )
    }
}

export default Result;

const ResultDetail = ({ results }) => {
    return (
        <ul className={`results`} >
            {results.map(result => {
                return (
                    <li className={`result-item`} >
                        {result.pass ? "PASS" : "FAIL"}
                    </li>
                )
            })}
        </ul>
    )
}

const StatusIcon = ({ classNames }) => {
    return (
        <div className={`statusIcon ${classNames}`} >
            <i className="fa fa-tick"></i>
        </div>
    )
}
