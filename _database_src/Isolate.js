import React from 'react';
import IsolateTab from './IsolateTab'


export default class Isolate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            activeIsolate: this.props.iso
        };
    }

    handleClick = () => {
        this.setState({isActive: !this.state.isActive});
        this.setState({activeIsolate: this.props.iso});
    }

    render() {
        const isolate = this.props.iso;
        const sourceType = isolate.source_type.charAt(0).toUpperCase() + isolate.source_type.slice(1);
        const sourceName = isolate.source_name;
        const sourceDefault = isolate.default ? "Yes" : "No";
        const sourceId = isolate.id;
        const sequence = isolate.sequences;

        const isoTabStyle = {
            border: "1px solid #d9d9d9",
            padding: "10px 10px",
            margin: "0 0 -1px 0",
            backgroundColor: "#dcefef",
        };

        const boxStyle = {
            borderRadius: "0", 
            boxShadow: "0 0", 
            border: "1px solid #d9d9d9"
        };

        let renderChoice;

        if (this.state.isActive) {                    
            renderChoice = (
                <div className="tile is-child box" style={boxStyle}>
                    <IsolateTab isoInfo={this.state.activeIsolate}/>
                </div> 
            );
        } else {                                
            renderChoice = <div />
        }

        return (
            <React.Fragment>
                <div className="is-fullwidth" onClick={this.handleClick} style={isoTabStyle}>
                    <a className="is-fullwidth" style={{color: "black"}}>
                        {sourceType} {sourceName}
                    </a>
                </div>
                {renderChoice}
            </React.Fragment>
        );
    }
}

