import React, { Component } from "react";
import {
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardFooter,
    CardBlock,
} from "reactstrap";

class StepTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    
    render() {
        return (
            <div className="animated fadeIn">
                
                <Row>
                    <Col xs="12" sm="12" md="6" lg="6">
                        <Card>
                            <CardHeader>
                                Add <strong>Steps</strong> to Test Case
                            </CardHeader>
                            <CardBlock className="card-body">
                                {this.props.children}
                            </CardBlock>

                            <CardFooter>
                                <Button
                                    type="submit"
                                    size="md"
                                    color="primary"
                                    onClick={(e) => this.props.addStep()}
                                >Add Another Step</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>               
            </div>
        )
    }
}

export default StepTwo;