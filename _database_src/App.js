import React from "react";
import Request from "superagent";
import Virus from "./Virus";
import VirusPage from "./VirusPage";
import Pager from "./Pager";
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
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

        const totalPages = Math.ceil(this.state.viruses.length / 15);

        const renderChoice = (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/viruses/1" />
                    </Route>
                    <Route path="/viruses/:num" render={({ match }) => <Pager match={match} virusData={this.state.viruses} totalPages={totalPages} />} />
                    <Route path="/virus/:id" render={({ match }) => <VirusPage match={match} virusData={this.state.viruses} />} />
                </Switch>
            </div>
        );

        return (
                <HashRouter>
                    {renderChoice}
                </HashRouter>
        );
    }    
}
