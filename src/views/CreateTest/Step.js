import React, { Component } from "react";
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBlock,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

class Step extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleChange(e) {
        const { target: { name, value } } = e;
        // sets flag that hides / shows the value field as needed
        if (name === "type" && value !== "click" && !this.state.needsValue) this.setState({ needsValue: true });
        if (name === "type" && value === "click" && this.state.needsValue) this.setState({ needsValue: false });

        this.props.handleChange(e, this.props.number - 1)
        return false;
    }

    render() {
        const { data, number, remove } = this.props;
        console.log("data", data)
        return (
            <Card>
                <CardHeader>
                    Step {number}
                    <a
                        href="#0"
                        className="float-right"
                        onClick={() => remove(number - 1)}><i className="fa fa-remove"></i></a>
                </CardHeader>
                <CardBlock className="card-body">
                    <Row>
                        <Col xs="6">
                            <FormGroup>
                                <Label htmlFor={`action-${number}`}>Action</Label>
                                <Input onChange={(e) => this.handleChange(e)} name="type" type="select" id={`action-${number}`} placeholder="Select an action" required >
                                    <option value="click">Click</option>
                                    <option value="get">Go to</option>
                                    <option value="sendKeys">Fill value</option>
                                    <option value="textContains">Text Contains</option>
                                    <option value="textNotContains">Text does not Contain</option>
                                </Input >
                            </FormGroup>
                        </Col>
                        {this.state.needsValue && <Col xs="6">
                            <FormGroup>
                                <Label htmlFor={`value-${number}`}>Value</Label>
                                <Input onChange={(e) => this.handleChange(e)} name="options.value" type="text" id={`value-${number}`} placeholder="Enter value here" />
                            </FormGroup>
                        </Col>}
                    </Row>
                    <Row>
                        <Col xs="6">
                            <FormGroup>
                                <Label htmlFor={`target-value-${number}`}>Target</Label>
                                <Input onChange={(e) => this.handleChange(e)} name={`target.value`} type="text" id={`target-value-${number}`} placeholder="Enter target element here" />
                            </FormGroup>
                        </Col>
                        <Col xs="6">
                            <FormGroup>
                                <Label htmlFor={`target-type-${number}`}>Value</Label>
                                <Input onChange={(e) => this.handleChange(e)} name={`target.type`} type="select" id={`target-type-${number}`} placeholder="Select target location method" required >
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
        )
    }
}

export default Step;