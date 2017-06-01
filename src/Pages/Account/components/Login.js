import React, {Component} from 'react';
import {
    Button,
    Panel,
   // HelpBlock
} from 'react-bootstrap';
import Common from '../../../Common';
import {Field, reduxForm,SubmissionError} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {
    emailValidator
} from '../../../Common/validators';

import {
    getUserAuth
} from '../../../utils';

import {login} from '../actions/login'


import './Account.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(values) {

       /* */
            const user=getUserAuth().model;
            if (user.user_email !== values.email) {
                throw new SubmissionError({
                    email: 'Email does not exist',
                    _error: 'Email does not exist!'
                })
            } else if (values.password !== user.user_password) {
                throw new SubmissionError({
                    password: 'Wrong password',
                    _error: 'Wrong password'
                })
            } else if (this.props.location.state && this.props.location.state.nextPathname) {
                this.props.router.push(this.props.location.state.nextPathname);
                this.props.location.state.nextPathname = null; // set it to null after redirect
            } else {
                this.props.router.push('/')
            }

    }

    render() {
        const {handleSubmit, submitting} = this.props;
        console.log(this.props)
        return (
            <Panel bsStyle="account" header="Login" className="Account">
                    <form name="loginForm" onSubmit={handleSubmit(this.submit)} noValidate="true">
                        <Field
                            name="email"
                            type="email"
                            component={Common.components.InputField}
                            label="Email"
                        />
                        <Field
                            name="password"
                            type="password"
                            component={Common.components.InputField}
                            label="Password"
                        />
                        {/*(this.props.error)?
                            <HelpBlock className="has-error">{this.props.error}</HelpBlock>:
                            null
                        */}
                        <div>
                            <Button type="submit" disabled={submitting}>Login
                                </Button>
                        </div>
                    </form>
            </Panel>

        );
    }
}
const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required'
    } else if (!emailValidator(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
};


const mapStateToProps = (state) => {
    const {login} = state.account;
    return {
        isLoading: login.get('isLoading'),
        error: login.get('error'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       login
    }, dispatch)
};

Login = reduxForm({
    form: 'loginForm',
    validate
})(Login);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))