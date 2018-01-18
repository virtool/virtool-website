import React from "react";
import Request from "superagent";
import Virus from "./Virus";
import VirusPage from "./VirusPage";
import Paginator from "./Paginator";

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
        if (this.state.viruses === null) {
            return <div />;
        }

        const i = this.state.page;
        const slice = this.state.viruses.slice(i * 10 - 10, i * 10);

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

                    <Paginator onClick={this.setPage} totalPages={totalPages} currentPage={this.state.page} />
                </div>
            );
        } else {
            renderChoice = (
                <VirusPage virus={this.state.virusActive} />
            );
        }

        return (
                <React.Fragment>
                    {renderChoice}
                </React.Fragment>
        );
    }    
}
