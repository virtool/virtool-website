import React from "react";
import {
    Link
} from 'react-router-dom'

export default function Search ({ term, onChange }) {
    return (
        <div className="container field has-addons" style={{padding: "0 0 20px 0"}}>
            <div className="control is-expanded">
                <input className="input" type="text" placeholder="Text input" value={term} onChange={(e) => onChange(e.target.value)} />
            </div>
            <div className="control">
                <Link to={`/virus/${term}`} className="button is-info" style={{backgroundColor: "#3c8786"}}>
                    Search
                </Link>
            </div>
        </div>
    );
}
