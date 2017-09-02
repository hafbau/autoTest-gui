import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import StepOne from './StepOne';
import {
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardFooter,
    CardBlock,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

class CreateTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                steps: []
            },
            step: 1,
        }
    }

    handleChange({ target: { name, value } }, index) {
        const form = this.state.form;
        if (Number.isInteger(index) && form.steps[index]) form.steps[index][name] = value;
        if (!Number.isInteger(index)) form[name] = value;

        this.setState({ form })
        return false;
    }

    handleSubmit(e) {
        // TODO: validate form
        console.log("form", this.state.form, "token", this.props.token);
        this.props.saveAndRun(this.state.form, this.props.token)
    }

    nextStep(step = 1) {
        // TODO: validate form
        const newStep = this.state.step + step;
        this.setState({ step: newStep })

    }

    addStep() {
        const steps = this.state.form.steps;
        steps.push({
            order: steps.length + 1
        });

        this.setState({ form: { ...this.state.form, steps } });
        return false; // to preventDefault and stopPropagation
    }

    remove(number) {
        const form = this.state.form;
        form.steps.splice(number, 1);

        form.steps = form.steps.map((step, idx) => {
            step.order = idx + 1;
            return step;
        });
        this.setState({ form });
        return false;
    }

    render() {
        if (this.props.running) return <Redirect to={{
            pathname: '/run',
            state: this.state.form
        }} />

        if (this.state.step === 1) return <StepOne
            nextStep={() => this.nextStep()}
            handleChange={(e) => this.handleChange(e)}/>
        
        const steps = this.state.form.steps;
        console.log("props crT", this.props)
        return (
            <div className="animated fadeIn">

                <Row>
                    <Col xs="12" sm="12" md="6" lg="6">
                        <Card>
                            <CardHeader>
                                Add <strong>Steps</strong> to Test Case
                            </CardHeader>
                            <CardBlock className="card-body">
                                {steps.map((step, number) => {
                                    return <Card key={number} >
                                        <CardHeader>
                                            Step {number + 1}
                                            <a
                                                href="#0"
                                                className="float-right"
                                                onClick={() => this.remove(number - 1)}><i className="fa fa-remove"></i></a>
                                        </CardHeader>
                                        <CardBlock className="card-body">
                                            <Row>
                                                <Col xs="6">
                                                    <FormGroup>
                                                        <Label htmlFor={`action-${number}`}>Action</Label>
                                                        <Input onChange={(e) => this.handleChange(e, number)} name="type" type="select" id={`action-${number}`} placeholder="Select an action" required >
                                                            <option value="click">Click</option>
                                                            <option value="get">Go to</option>
                                                            <option value="sendKeys">Fill value</option>
                                                            <option value="textContains">Text Contains</option>
                                                            <option value="textNotContains">Text does not Contain</option>
                                                        </Input >
                                                    </FormGroup>
                                                </Col>
                                                <Col xs="6">
                                                    <FormGroup>
                                                        <Label htmlFor={`value-${number}`}>Value</Label>
                                                        <Input onChange={(e) => this.handleChange(e, number)} name="options.value" type="text" id={`value-${number}`} placeholder="Enter value here" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs="6">
                                                    <FormGroup>
                                                        <Label htmlFor={`target-value-${number}`}>Target</Label>
                                                        <Input onChange={(e) => this.handleChange(e, number)} name="target.value" type="text" id={`target-value-${number}`} placeholder="Enter target element here" />
                                                    </FormGroup>
                                                </Col>
                                                <Col xs="6">
                                                    <FormGroup>
                                                        <Label htmlFor={`target-type-${number}`}>Method</Label>
                                                        <Input onChange={(e) => this.handleChange(e, number)} name="target.type" type="select" id={`target-type-${number}`} placeholder="Select target location method" required >
                                                            <option value="css">CSS</option>
                                                            <option value="text">Text</option>
                                                            <option value="xpath">Xpath</option>
                                                            <option value="linkText">Link Text</option>
                                                        </Input >
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </CardBlock>
                                    </Card>
                                })}
                            </CardBlock>

                            <CardFooter>
                                <Button
                                    type="submit"
                                    size="md"
                                    color="primary"
                                    onClick={() => this.addStep()}
                                >Add Another Step</Button>
                                <Button
                                    className="float-right"
                                    type="submit"
                                    size="md"
                                    color="primary"
                                    onClick={() => this.handleSubmit()}
                                >Save and Run</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="6">
                        {this.props.result && this.props.result.imageDataUrl && <img src={this.props.result.imageDataUrl} alt="screenshot" style={{minHeight: "200px", minWidth: "200px"}}/>}
                    </Col>
                </Row>
            </div>
        )

    }
}

export default CreateTest;
