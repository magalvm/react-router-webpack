import React from 'react';
import {
    FormGroup,
    FormControl,
    HelpBlock,
    Label
} from 'react-bootstrap';

const InputField = (props) => (
    <FormGroup className={props.groupClass} validationState={(props.meta.touched && props.meta.error)?'error':null}>
        {props.labelText ? <Label className={props.labelClass}>{props.labelText}</Label> : null}
        <FormControl className={props.inputClass} placeholder={props.label} type={props.type} {...props.input} />
        {props.meta.touched && props.meta.error && props.meta.invalid && props.meta.submitFailed &&
        <HelpBlock className={props.helpClassName}>{props.meta.error}</HelpBlock>
        }
    </FormGroup>
);

export default InputField;