import React from 'react';
import './Button.styles.css';

const workingOperator = val => {
    return !isNaN(val) || val === "=" || val === ".";
}

export const Button = props => (
    <div className={`btn-wrapper ${
        workingOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
)

export default Button;