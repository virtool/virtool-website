import React from "react";
import { Link } from 'react-router-dom';

export default function Search ({ term, onChange }) {

    return (
        <Link to="/viruses/1" className="control is-expanded has-icons-left">
            <input className="input" type="text" placeholder="Name or abbreviation" value={term} onChange={(e) => onChange(e.target.value)} />
            <span className="icon is-small is-left">
                <i className="fa fa-search" aria-hidden="true" />
            </span>
        </Link>
    );
}
