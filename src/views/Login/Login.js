import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

// Making the container here. If it gets more complicated, move out of here
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../action_creators/auth';

import {
  Button,
  Card,
  CardBlock,
  CardGroup,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Row
} from "reactstrap";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }

  handleChange(e) {
    const form = this.state.form;
    form[e.target.name] = e.target.value
    this.setState({ form })
  }

  handleSubmit() {
    console.log("form", this.state.form)
    this.props.login(this.state.form);
  }
  render() {
    console.log("props in login", this.props)
    if (this.props.token) return <Redirect to="/" />
   
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="mb-0">
                <Card className="p-4">
                  <CardBlock className="card-body">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                      <Input onChange={(e) => this.handleChange(e)} name="email" type="email" placeholder="Email"/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                      <Input onChange={(e) => this.handleChange(e)} name="password" type="password" placeholder="Password"/>
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button onClick={() => this.handleSubmit()} color="primary" className="px-4">Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardBlock>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBlock className="card-body text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Blayk tests all the things.</p>
                      <Button
                        active
                        className="mt-3"
                        color="primary"
                        tag={Link}
                        to="/register"
                      >Register Now!</Button>
                    </div>
                  </CardBlock>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


// connecting to store business
function mapStateToProps(state, ownProps) {
  console.log("state in login", state)

  return { token: state.token }
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch),
  };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
