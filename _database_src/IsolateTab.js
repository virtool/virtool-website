import React from 'react';
import Sequence from './Sequence';

export default class IsolateTab extends React.Component {

    componentDidMount() {
        this.node.scrollIntoView({behavior: "smooth"});
    }

    render () {
        const isolate = this.props.isoInfo;
        const sourceDefault = isolate.default ? "Yes" : "No";
        const sourceId = isolate.id;
        const sequence = isolate.sequences;

        let sourceType;
        let sourceName;

        if (isolate.source_type === "unknown") {
            sourceType = "Isolate";
        } else {
            sourceType = isolate.source_type.charAt(0).toUpperCase() + isolate.source_type.slice(1);
        }

        if (isolate.source_name === "unknown") {
            sourceName = "Unknown";
        } else {
            sourceName = isolate.source_name;
        }

        const iconStyle = {
            borderRadius: "50%",
            backgroundColor: "#3c8786", 
            color: "white"
        };

        const seqArray = sequence.map((seq, index) =>
            <Sequence key={index} seq={seq} />
        );

        return (
            <div ref={node => this.node = node}>
                <h4><strong>{sourceType} {sourceName}</strong></h4>
                <br />
                <table className="table is-bordered is-fullwidth">
                    <tbody>                      
                        <tr>
                            <th>Name</th>
                            <td>{sourceType} {sourceName}</td>
                        </tr>
                        <tr>
                            <th>Source Type</th>
                            <td>{sourceType}</td>
                        </tr>
                        <tr>
                            <th>Source Name</th>
                            <td>{sourceName}</td>
                        </tr>
                        <tr>
                            <th>Default</th>
                            <td>{sourceDefault}</td>
                        </tr>
                        <tr>
                            <th>Unique ID</th>
                            <td>{sourceId}</td>
                        </tr>                        
                    </tbody>
                </table>
                <h4><strong>Sequences</strong> <span className="tag" style={iconStyle}>{sequence.length}</span></h4>   
                <br />
                {seqArray}
            </div>
        );
    }
}