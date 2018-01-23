import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const navStyle = {
    margin: "0 -1px 0 0",
    borderRadius: "0",
};

const PaginationLink = ({ page, curPage, onClick, symbol }) => (
        <li onClick={() => onClick(page)}>
            <Link to={`/database/${page}`} className={page === curPage ? "pagination-link is-current" : "pagination-link"} style={navStyle}>
                {symbol}
            </Link>
        </li>
);

export default class Paginator extends React.Component {
    range(start, end) {
        return Array(end - start + 1).fill().map((_, i) => start + i);
    }

    render() {
        let thisPage = this.props.currentPage;

        if (this.props.match) {
            thisPage = parseInt(this.props.match.params.num);
        } 

        let startPage, endPage;

        if (this.props.totalPages <= 10) {
            startPage = 1;
            endPage = this.props.totalPages;
        } else {
            if (this.props.currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (this.props.currentPage + 4 >= this.props.totalPages) {
                startPage = this.props.totalPages - 9;
                endPage = this.props.totalPages;
            } else {
                startPage = this.props.currentPage - 5;
                endPage = this.props.currentPage + 4;
            }
        }

        const linkItems = this.range(startPage, endPage).map(page =>
            <PaginationLink key={page} page={page} curPage={thisPage} onClick={this.props.onClick} symbol={page} />
        );

        return (
            <div>
                <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                    <ul className="pagination-list">
                        <PaginationLink key={-1} page={1} curPage={this.props.currentPage + 1} onClick={this.props.onClick} symbol="&lt;&lt;" />
                        <PaginationLink key={0} 
                                        page={(this.props.currentPage - 1) < 1 ? this.props.currentPage : (this.props.currentPage - 1)} 
                                        curPage={this.props.currentPage + 1} 
                                        onClick={this.props.onClick} 
                                        symbol="&lt;" />
                        {linkItems}
                        <PaginationLink key={11} 
                                        page={(this.props.currentPage + 1) > this.props.totalPages ? this.props.currentPage : (this.props.currentPage + 1)} 
                                        curPage={this.props.currentPage - 1} 
                                        onClick={this.props.onClick} 
                                        symbol="&gt;" />
                        <PaginationLink key={12} page={this.props.totalPages} curPage={this.props.currentPage - 1} onClick={this.props.onClick} symbol="&gt;&gt;" />
                    </ul>    
                </nav>
            </div>
        );
    }
}