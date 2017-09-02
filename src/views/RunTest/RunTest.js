import React, { Component } from 'react';
import {
    Button,
    Col,
    Card,
    CardBlock,
    CardFooter,
    CardHeader,
    Input,
    Label,
    Row
} from "reactstrap";

import RunState from '../../components/ProgressBar/';

// for dev testing
import { fakeCase, fakeRun } from '../../api';

class RunTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            incr: 5,
            loopTime: 500,
            maxPercent: 90,
            percent: 0,
            case: this.props.case || fakeCase // fakeCase to be removed post dev test
        };

        
    }

    componentDidMount() {
        if (this.state.case) {
            if (typeof this.props.run === "function") this.props.run(this.state.case)
            fakeRun(this.state.case, (result) => this.handleResult(result)) // fakeRun to be removed
    
        }
    }

    componentWillReceiveProps(nextProps) {
        // this is where handleResult will be called
    }

    handleResult(result) {
        this.setState((prevState, props) => {
            return Object.assign({}, prevState, { result })
        })
    }

    render() {
        console.log("props runned", this.props, "state result", JSON.stringify(this.state.result));
        const caseToRun = this.state.case;
        const result = this.state.result;

        return (
            <div className="animated fadeIn">
                {!caseToRun && <Row>
                    <Col xs="12" sm="12" md="12" lg="12">
                        <Card>
                            <Input size="lg" onChange={(e) => this.handleChange(e)} name="target.type" type="select" required >
                                <option value="">Select a test to run</option>
                                <option value="css">CSS</option>
                                <option value="text">Text</option>
                                <option value="xpath">Xpath</option>
                                <option value="linkText">Link Text</option>
                            </Input >
                        </Card>
                    </Col>
                </Row>}
                {!!caseToRun && <Row>
                    <Col xs="12" sm="12" md="12" lg="12">
                        <Card>
                            <Label>
                                OVERALL STATUS
                            </Label>
                            <ProgressBar
                                barClassName="Progress-Bar-Large"
                                pass={undefined}
                                done={undefined}
                            />
                        </Card>
                    </Col>
                </Row>}
                {!!caseToRun && <Row>
                    <Col xs="12" sm="12" md="6" lg="6">
                        <Card>
                            <CardHeader>
                                Running Test Case {caseToRun.name || "unnamed"} from Test suite foo
                            </CardHeader>

                            <CardBlock className="card-body">
                                <RunState case={caseToRun} result={result} />

                            </CardBlock>

                            <CardFooter>
                                <Button
                                    className="float-right"
                                    type="submit"
                                    size="md"
                                    color="primary"
                                    onClick={() => this.handleSubmit()}
                                >Run Again</Button>
                            </CardFooter>
                        </Card>
                    </Col>

                    <Col xs="12" sm="12" md="6" lg="6">
                        {result && result.image && <img src={result.image} alt="screenshot" style={{ minHeight: "200px", minWidth: "200px" }} />}
                    </Col>
                </Row>}
            </div>
        )
    }
}

export default RunTest;
