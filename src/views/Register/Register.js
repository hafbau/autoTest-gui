import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBlock,
  CardFooter,
  Button,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { form: {} };
  }

  handleChange({ target: { name, value } }) {
    const form = this.state.form;
    form[name] = value;
    this.setState({ form });
    return false;
  }

  handleRegister(e) {
    // TODO: validate form before sending
    this.props.register(this.state.form);
    return false;
  }
  render() {
    if (this.props.token) return <Redirect to="/tests/new" />
    
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBlock className="card-body p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>

                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                    <Input onChange={(e) => this.handleChange(e)} name="firstName" type="text" placeholder="First Name" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                    <Input onChange={(e) => this.handleChange(e)} name="lastName" type="text" placeholder="Last Name" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon>@</InputGroupAddon>
                    <Input onChange={(e) => this.handleChange(e)} name="email" type="text" placeholder="Email"/>
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                    <Input onChange={(e) => this.handleChange(e)} name="password" type="password" placeholder="Password"/>
                  </InputGroup>
                  
                  <Button onClick={(e) => this.handleRegister(e) } color="success" block>Create Account</Button>
                </CardBlock>

                <CardFooter className="p-4">
                  <Row>
                    {/*<Col xs="12" sm="6">
                      <Button className="btn-facebook" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter" block><span>twitter</span></Button>
                    </Col>*/}
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
