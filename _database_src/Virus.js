import React from 'react';
import { Link } from 'react-router-dom'

export default function Virus (props) {

    const { name, abbreviation, _id } = props.virus;

    const buttonStyle = {
        marginBottom: "10px",
        padding: "20px 0 20px 0 ",
        boxShadow: "2px 2px 5px 0 lightgray",
        borderRadius: "0"
    };

    return (           
        <Link to={`/virus/${props.virus._id}`} className="button is-fullwidth" style={buttonStyle}>
            <div>
                {name} <sub>{abbreviation}</sub>
            </div>
        </Link>
    );
}
