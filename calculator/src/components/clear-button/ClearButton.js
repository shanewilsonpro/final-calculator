import React from 'react';
import './ClearButton.styles.css';

export const ClearButton = (props) => (
    <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
)

export default ClearButton