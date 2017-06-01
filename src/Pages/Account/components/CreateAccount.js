import React, {Component} from 'react';
import {
    Panel
} from 'react-bootstrap';
import {bootstrapUtils} from 'react-bootstrap/lib/utils';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import CreateAccountForm from'./CreateAccountForm';

import './Account.css';

import {
    createNewUser,
    resetAccount
} from '../actions/registration'
bootstrapUtils.addStyle(Panel, 'account');

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(values) {
        this.props.createNewUser(values);
        if (!this.props.error) {
            this.props.router.push('/login')
        }
    }

    componentWillUnmount() {
        this.props.resetAccount();
    }

    render() {
        return (
            <Panel bsStyle="account" header="Registration" className="Account">
                    <CreateAccountForm onSubmit={this.submit}/>
            </Panel>
        );
    }
}

const mapStateToProps = (state) => {
    const {registration} = state.account;
    return {
        isLoading: registration.get('isLoading'),
        error: registration.get('error'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createNewUser,
        resetAccount
    }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateAccount));