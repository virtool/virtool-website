import React from "react";
import Request from "superagent";
import Virus from "./Virus";
import VirusPage from "./VirusPage";
import Paginator from "./Paginator";
import {
    BrowserRouter,
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
            page: 1,
            virusActive: null
        };
    }

    componentDidMount () {
        Request
            .get('/viruses.json')
            .then((res) => {                
                this.setState({viruses: res.body.data});
            })
    }
    
    setPage = (page) => {
        this.setState({page});
    }

    setVirusActive = (name) => {
        this.setState({virusActive: name});
    }

    render () {    
        if (this.state.viruses === null) {                                          /* avoids errors if there is no access to viral database data */
            return <div />;
        }

        const i = this.state.page;
        const slice = this.state.viruses.slice(i * 10 - 10, i * 10);                /* displays 10 virus tabs per page */

        const virusComponents = slice.map((virus, index) =>
            <Virus key={index} virus={virus} onClick={this.setVirusActive} />
        );

        const totalPages = Math.ceil(this.state.viruses.length / 10);

        let renderChoice;

        if (!this.state.virusActive) {
            renderChoice = (
                <div>
                    <div className="container" style={{marginTop: "20px", marginBottom: "20px"}}>
                        {virusComponents}
                    </div>

                        {/*FIX ME: url updates on clicks, but cannot access specific pages via url inputs :(*/}
                        <Route exact path="/database/" component={() => <Paginator onClick={this.setPage} totalPages={totalPages} currentPage={this.state.page} />}/>
                        <Route path="/database/:num" render={(props) => <Paginator onClick={this.setPage} totalPages={totalPages} currentPage={this.state.page} {...props} />} />
                </div>
            );
        } else {
            renderChoice = (
                    <VirusPage virus={this.state.virusActive} />
            );
        }

        return (
                <BrowserRouter>
                    {renderChoice}
                </BrowserRouter>
        );
    }    
}
