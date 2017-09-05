import React, { Component } from 'react';
import { HashLoader } from 'react-spinners';
import {
    Button,
    Col,
    Card,
    CardBlock,
    CardFooter,
    CardHeader,
    Row
} from "reactstrap";

import { MediaPanel, RunState } from '../../components';

// for dev testing
import { fakeCase, fakeRun } from '../../api';

class RunTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            case: this.props.runningCase || fakeCase, // fakeCase to be removed post dev test
            results: []
        };

        
    }

    componentDidMount() {
        if (this.state.case && !this.props.running) {
            // bind props.run from app container `Blayk`
            if (typeof this.props.run === "function") this.props.run(this.state.case)
            fakeRun(this.state.case, (result, status) => this.handleResult(result, status)) // fakeRun to be removed
    
        }
    }

    componentWillReceiveProps(nextProps) {
        // should check if result is already being handled
        if (nextProps.result &&
            ((this.state.result &&
                nextProps.result.stepOrder !== this.state.result.stepOrder) ||
                !this.state.result)
        ) this.handleResult(nextProps.result, nextProps.status)
    }

    createIssue() {
        console.log("Im creating an issue")
    }

    updateIssue() {
        console.log("Im updating an issue")
    }

    handleResult(result, status) {
        this.setState((prevState, props) => {
            const results = prevState.results;
            results.push(result);
            
            return Object.assign({},
                prevState,
                { result, results, status }
            )
        })
    }

    runAgain() {
        this.setState((state, props) => Object.assign({},
            state, {result: null, results: [], status: "pending"}
        ));
        this.componentDidMount();
    }

    render() {
        const caseToRun = this.state.case;
        const result = this.state.result;
        const status = this.props.status || this.state.status;
        const isRunning = this.props.running || (status !== "done" && status !== "failed");

        return (
            <div className="animated fadeIn">
                
                {!!caseToRun && <Row>
                    <Col xs="12" sm="12" md="6" lg="6">
                        <Card>
                            <CardHeader>
                                Running Test Case {caseToRun.name || "unnamed"} from Test suite foo
                            </CardHeader>

                            <CardBlock className={`card-body`}>
                                <RunState
                                    running={isRunning}
                                    result={result}
                                    results={this.props.results || this.state.results}
                                    status={status} />

                            </CardBlock>

                            <CardFooter>
                                {result && !result.pass && caseToRun && !caseToRun.hasIssue && <Button
                                    color="secondary"
                                    disabled={isRunning}
                                    onClick={() => this.createIssue()}
                                    size="md"
                                    type="submit"
                                >Create Issue</Button>}

                                {result && result.pass && caseToRun && caseToRun.hasIssue && <Button
                                    color="secondary"
                                    disabled={isRunning}
                                    onClick={() => this.updateIssue()}
                                    size="md"
                                    type="submit"
                                >Update Issue</Button>}

                                <Button
                                    className="float-right"
                                    color="primary"
                                    disabled={isRunning}
                                    onClick={() => this.runAgain()}
                                    size="md"
                                    type="submit"
                                >{isRunning ? 
                                    <span className="loading-label">
                                        <HashLoader color="#fff" size={13} />
                                        &nbsp;&nbsp;Running
                                    </span>
                                :
                                    "Run Again"
                                }</Button>
                            </CardFooter>
                        </Card>
                    </Col>

                    <Col xs="12" sm="12" md="6" lg="6">
                        <MediaPanel image={result && result.image}/>
                    </Col>
                </Row>}
            </div>
        )
    }
}

export default RunTest;
