import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import './MainMenu.css';
import {IndexLinkContainer} from 'react-router-bootstrap';

import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap'

import {withRouter} from 'react-router';

import {logOut} from '../../../Pages/Account/actions/login'
import {getUserAuth} from '../../../utils';

class mainMenu extends Component {
    render() {
        return (
            <Navbar className="MainMenu">
                    <Navbar.Brand>
                        Companies
                    </Navbar.Brand>
                <Nav pullRight>
                    {(!!getUserAuth()) ?
                            <IndexLinkContainer to="/login">
                                <NavItem eventKey={1} onClick={this.props.logOut}>Exit</NavItem>
                            </IndexLinkContainer>
                        : <IndexLinkContainer eventKey={1} to="/login">
                            <NavItem>Sign In</NavItem>
                        </IndexLinkContainer>
                    }
                </Nav>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        login
    } = state.account;
    return {
        user: login.get('user'),
        isAuthenticated: login.get('isAuthenticated')
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logOut
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(mainMenu));