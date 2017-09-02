import React from "react";
import {
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardFooter,
    CardBlock,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

export default function StepOne({ nextStep, handleChange }) {
    return (
        <div className="animated fadeIn">

            <Row>
                <Col xs="12" md="6">
                    <Card>
                        <CardHeader>
                            <strong>Create Test</strong> > Step <strong>1</strong>/2
                        </CardHeader>
                        <CardBlock className="card-body">
                            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                <FormGroup>
                                    <Label htmlFor="siteName">Site</Label>
                                    <Input onChange={(e) => handleChange(e)} name="siteName" type="text" id="siteName" placeholder="Enter site name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="siteUrl">Site Address</Label>
                                    <Input onChange={(e) => handleChange(e)} name="siteUrl" type="text" id="siteUrl" placeholder="Enter site url" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="case">Test Suite Name</Label>
                                    <Input onChange={(e) => handleChange(e)} name="name" type="text" id="suite" placeholder="Enter test suite name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="case">Test Case Name</Label>
                                    <Input onChange={(e) => handleChange(e)} name="caseName" type="text" id="case" placeholder="Enter test case name" />
                                </FormGroup>
                                
                            </Form>
                        </CardBlock>
                        <CardFooter>
                            <Button
                                className="float-right"
                                type="submit"
                                size="md"
                                color="primary"
                                onClick={(e) => nextStep()}
                            >Next <i className="fa fa-arrow-right"></i></Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}