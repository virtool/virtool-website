import React from "react";
import { Link } from 'react-router-dom';

export default function Search ({ term, onChange }) {

    return (
        <Link to={`/viruses/1`} className="control is-expanded">
            <input className="input" type="text" placeholder="filter results by virus name, abbreviation, or id" value={term} onChange={(e) => onChange(e.target.value)} />
        </Link>
    );
}
