import React, {Component} from 'react';
import {
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  DropdownToggle
} from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  handleLogout() {
    this.props.logout(this.props.token)
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="mobile-sidebar-toggler d-lg-none" onClick={this.mobileSidebarToggle}>&#9776;</NavbarToggler>
        <NavbarBrand href="#"></NavbarBrand>
        <Nav className="navbar-nav d-md-down-none">
          <NavItem>
            <NavbarToggler className="nav-link sidebar-toggler" type="button"
                           onClick={this.sidebarToggle}>&#9776;</NavbarToggler>
          </NavItem>
        </Nav>

        <Nav className="navbar-nav ml-auto">
          <NavItem>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle className="nav-link dropdown-toggle">
                <img src={'img/avatars/6.jpg'} className="img-avatar" alt="blake@testalldfins.com"/>
                <span className="d-md-down-none">blake</span>
              </DropdownToggle>
              <DropdownMenu right className={this.state.dropdownOpen ? 'show' : ''}>
                <DropdownItem header className="text-center"><strong>Account</strong></DropdownItem>

                <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
                <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
                <DropdownItem><i className="fa fa-file"></i> Test Suites<Badge color="primary">42</Badge></DropdownItem>
                <DropdownItem divider/>
                <DropdownItem onClick={() => this.handleLogout()}><i className="fa fa-lock"></i> Logout</DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </NavItem>
          <NavItem className="d-md-down-none">
          </NavItem>
        </Nav>
      </header>
    )
  }
}

export default Header;
