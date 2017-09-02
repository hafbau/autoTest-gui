import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { logout } from '../../action_creators/auth';
import { saveAndRun } from '../../action_creators/test';

import { createListener } from '../../listeners';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container } from 'reactstrap';

import CreateTest from '../../views/CreateTest';
import Header from '../../components/Header/';
import RunTest from '../../views/RunTest/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Footer from '../../components/Footer/';

class App extends Component {

  componentWillMount() {
    console.log("will mount", this.props)
    if (this.props.token) this.props.createListener(String(this.props.user.id), this.props.socket);
  }

  render() {
    if (!this.props.token) return <Redirect to="/login" />
    return (
      <div className="app">
        <Header {...this.props}/> 
        <div className="app-body">
            <Sidebar {...this.props}/>  
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/new" name="Create Test" render={() => <CreateTest {...this.props} />}/>
                <Route path="/run" name="Run Test" render={() => <RunTest {...this.props} />}/>
               
                {/* <Redirect from="/logout" to="/login"/> */}
                {/* <Redirect from="/" to="/tests/new"/> */}
                <Route path="/" exact name="Home" render={() => <CreateTest {...this.props} />}/>
              </Switch>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return { ...state }
}

function mapDispatchToProps(dispatch) {
  return {
    createListener: bindActionCreators(createListener, dispatch),
    logout: bindActionCreators(logout, dispatch),
    saveAndRun: bindActionCreators(saveAndRun, dispatch),
  };
}

const Blayk = connect(mapStateToProps, mapDispatchToProps)(App);
export default Blayk;