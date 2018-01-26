import React from 'react';
import { Link } from 'react-router-dom'

export default function PagerLink ({ page, curPage, symbol }) {

    const navStyle = {
        margin: "0 -1px 0 0",
        borderRadius: "0",
    };

    return (
        <li>
            <Link to={`/viruses/${page}`} className={page === curPage ? "pagination-link is-current" : "pagination-link"} style={navStyle}>
                {symbol}
            </Link>
        </li>
    );
}
