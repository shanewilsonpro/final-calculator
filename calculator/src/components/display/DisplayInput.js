import React from 'react';
import './DisplayInput.styles.css';

export const DisplayInput = (props) => (
    <div className="input">
        {props.input}
    </div>
)

export default DisplayInput;