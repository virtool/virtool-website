import React from "react";
import Request from "superagent";
import VirusPage from "./VirusPage";
import Pager from "./Pager";
import {
    HashRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

export default class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            viruses: null,
        };
    }

    componentDidMount () {
        Request
            .get('/viruses.json')
            .then((res) => {                
                this.setState({viruses: res.body.data});
            })
    }

    setVirusActive = (name) => {
        this.setState({virusActive: name});
    }

    render () {    
        if (this.state.viruses === null) {                                          /* avoids errors if there is no access to viral database data */
            return <div />;
        }

        const numItemsPerPage = 15;

        const totalPages = Math.ceil(this.state.viruses.length / numItemsPerPage);

        return (
                <HashRouter>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/viruses/1" />
                        </Route>
                        <Route path="/viruses/:num" render={({ match }) => <Pager match={match} virusData={this.state.viruses} totalPages={totalPages} num={numItemsPerPage} />} />
                        <Route path="/virus/:id" render={({ match }) => <VirusPage match={match} virusData={this.state.viruses} />} />
                    </Switch>
                </HashRouter>
        );
    }    
}
