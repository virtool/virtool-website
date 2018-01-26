import React from 'react';
import IsolateTab from './IsolateTab';
import Caret from './Caret';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default class Isolate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            activeIsolate: this.props.iso
        };
    }

    componentDidUpdate(prevProps, prevState) {
        this.node.scrollIntoView({behavior: "smooth"});
    }

    handleClick = () => {
        this.setState({
            isActive: !this.state.isActive, 
            activeIsolate: this.props.iso
        });
    }

    render() {
        const isolate = this.props.iso;
        const sourceType = _.capitalize(isolate.source_type);
        const sourceName = isolate.sourceName === "unknown" ? "isolate" : isolate.source_name;
        const isDefault = isolate.default ? "Yes" : "No";
        const isolateId = isolate.id;
        const sequences = isolate.sequences;

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
                    <IsolateTab isoType={sourceType} isoName={sourceName} isDef={isDefault} isoId={isolateId} isoSeq={sequences} />
                </div> 
            );
        } else {                                
            renderChoice = <div />
        }

        return (
            <React.Fragment>
                <a className="is-fullwidth" style={{color: "black"}}>
                    <div className="is-fullwidth" ref={node => this.node = node} onClick={this.handleClick} style={isoTabStyle}>
                        {sourceType} {sourceName}   
                        <Caret isActive={this.state.isActive} />
                    </div>
                </a>
                {renderChoice}
            </React.Fragment>
        );
    }
}
