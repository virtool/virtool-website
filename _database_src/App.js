import React from "react";
import Request from "superagent";
import VirusPage from "./VirusPage";
import Pager from "./Pager";
import Search from "./Search";
import {
    HashRouter,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom'

export default class App extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            viruses: null,
            searchTerm: ""
        };
    }

    componentDidMount () {
        Request
            .get('/viruses.json')
            .then((res) => {                
                this.setState({viruses: res.body.data});
            }).then(() => {
                const ele = document.getElementById('pre-app');
                if (ele) {
                    ele.outerHTML = "<div />"; 
                }
            })          
    }

    setSearch = (term) => {
        this.setState({searchTerm: term});
    }

    clearSearch = () => {
        this.setSearch("");
    }

    render () {  

        if (this.state.viruses === null) {                                          
            return <div />;
        }

        const numItemsPerPage = 15;
        let totalPages;
        let virusResults;

        if (this.state.searchTerm) {
            virusResults = this.state.viruses.filter(vir => 
                (
                    vir.lower_name.includes(this.state.searchTerm.toLowerCase()) 
                    || vir.abbreviation.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                )
            );
        } else {
            virusResults = this.state.viruses;
        }

        totalPages = Math.ceil(virusResults.length / numItemsPerPage);

        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/viruses/1" />
                    </Route>
                    <Route path="/viruses/:num" render={({ match }) => {
                        return (
                            <div>
                                <div className="container" >
                                    <div className="title is-4" style={{margin: "0 0 20px 0"}} > Virus Database </div>
                                </div>
                                <div className="container field has-addons" style={{padding: "0 0 20px 0"}}>
                                    <Search term={this.state.searchTerm} onChange={this.setSearch} />
                                </div>
                                <Pager match={match} virusData={virusResults} totalPages={totalPages} num={numItemsPerPage} searchTerm={this.state.searchTerm}/>
                            </div>
                        );
                    }} />
                    <Route path="/virus/:id" render={({ match }) => <VirusPage match={match} virusData={this.state.viruses} />} />
                </Switch>
            </HashRouter>
        );
    }    
}
