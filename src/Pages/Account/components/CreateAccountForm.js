import React, {Component} from 'react';
import {
    Button,
} from 'react-bootstrap';

import Common from '../../../Common';
import {Field, reduxForm} from 'redux-form';

import {
    emailValidator,
    passwordValidator
} from '../../../Common/validators'

class CreateAccountForm extends Component {

    /* constructor(props) {
     super(props);
     }*/
    render() {
        const {handleSubmit, submitting} = this.props;
        return (
            <form name="registrationForm"  onSubmit={handleSubmit} noValidate="true">
                <Field
                    name="email"
                    type="email"
                    component={Common.components.InputField}
                    label="Email"
                    inputClass="rounded-input"
                />
                <Field
                    name="password"
                    type="password"
                    component={Common.components.InputField}
                    label="Password"
                    inputClass="rounded-input"
                />
                <Field
                    name="confirmpassword"
                    type="password"
                    component={Common.components.InputField}
                    label="Confirm Password"
                    inputClass="rounded-input"
                />
                <Button type="submit" disabled={submitting}>
                    Registration
                </Button>
            </form>
        )
    }
}
const validate = values => {
    const errors = {};
    if (!values.password) {
        errors.password = 'Required'
    } else if (passwordValidator(values.password)) {
        errors.password = 'Wrong password'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!emailValidator(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.confirmpassword) {
        errors.confirmpassword = 'Required'
    } else if (values.confirmpassword.toLowerCase() !== values.password.toLowerCase()){
        errors.confirmpassword = '"Passwords Do not Match"'
    }

    return errors
};

export default reduxForm({
    form: 'registrationForm',
    validate// a unique identifier for this form
})(CreateAccountForm);