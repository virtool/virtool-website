import React from 'react';

export default function Caret (props) {

    return (
        <span className="icon" style={{float: "right"}}>
            <i className={`fa fa-caret-${props.isActive ? "up" : "down"}`} aria-hidden="true" />
        </span> 
    );
}
