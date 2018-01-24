import React from 'react';
import Virus from "./Virus";
import { Link } from 'react-router-dom';
import _ from 'lodash';

const navStyle = {
    margin: "0 -1px 0 0",
    borderRadius: "0",
};

const PagerLink = ({ page, curPage, onClick, symbol }) => (
    <li>
        <Link to={`/viruses/${page}`} className={page === curPage ? "pagination-link is-current" : "pagination-link"} style={navStyle}>
            {symbol}
        </Link>
    </li>
);

export default class Pager extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
        window.scrollTo(0, 0);
    }

    range(start, end) {
        return Array(end - start + 1).fill().map((_, i) => start + i);
    }

    render() {
        const virusNum = this.props.num;
        let thisPage;
        let startPage, endPage;

        if (this.props.match) {
            thisPage = parseInt(this.props.match.params.num);
        } else {
            thisPage = 1;
        }

        if (this.props.totalPages <= 10) {
            startPage = 1;
            endPage = this.props.totalPages;
        } else {
            if (thisPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (thisPage + 4 >= this.props.totalPages) {
                startPage = this.props.totalPages - 9;
                endPage = this.props.totalPages;
            } else {
                startPage = thisPage - 5;
                endPage = thisPage + 4;
            }
        }

        const linkItems = this.range(startPage, endPage).map(page =>
            <PagerLink key={page}  page={page} curPage={thisPage} symbol={page} />
        );

        const i = thisPage;
        const slice = this.props.virusData.slice(i * virusNum - virusNum, i * virusNum);                

        const virusComponents = slice.map((virus, index) =>
            <Virus key={index} virus={virus} />
        );

        return (
            <div>
                <div className="container" style={{marginTop: "20px", marginBottom: "20px"}}>
                    {virusComponents}
                </div>
                <div>
                    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                        <ul className="pagination-list">
                            <PagerLink  key={-1}  page={1} curPage={this.props.currentPage + 1} symbol="&lt;&lt;" />
                            <PagerLink  key={0}                                        
                                        page={(thisPage - 1) < 1 ? thisPage : (thisPage - 1)} 
                                        curPage={thisPage + 1}  
                                        symbol="&lt;" />
                            {linkItems}
                            <PagerLink  key={11}                                         
                                        page={(thisPage + 1) > this.props.totalPages ? thisPage : (thisPage + 1)} 
                                        curPage={thisPage - 1} 
                                        symbol="&gt;" />
                            <PagerLink  key={12} page={this.props.totalPages} curPage={thisPage - 1} symbol="&gt;&gt;" />
                        </ul>    
                    </nav>
                </div>
            </div>
        );
    }
}