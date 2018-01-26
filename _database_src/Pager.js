import React from 'react';
import Virus from './Virus';
import PagerLink from './PagerLink';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default class Pager extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        window.scrollTo(0, 0);
    }

    selectedPage() {
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

        return {
            thisPage,
            startPage,
            endPage
        };
    }

    render() {
        const virusNum = this.props.num;
        const { thisPage, startPage, endPage } = this.selectedPage();

        const linkItems = _.range(startPage, endPage).map(page =>
            <PagerLink key={page}  page={page} curPage={thisPage} symbol={page} />
        );

        const slice = this.props.virusData.slice(thisPage * virusNum - virusNum, thisPage * virusNum);                

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
