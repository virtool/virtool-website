import React from 'react';
import Sequence from './Sequence';

export default class IsolateTab extends React.Component {

    render () {

        const isolate = this.props.isoInfo;
        const sourceType = isolate.source_type.charAt(0).toUpperCase() + isolate.source_type.slice(1);
        const sourceName = isolate.source_name;
        const sourceDefault = isolate.default ? "Yes" : "No";
        const sourceId = isolate.id;
        const sequence = isolate.sequences;

        const iconStyle = {
            borderRadius: "50%",
            backgroundColor: "#3c8786", 
            color: "white"
        };


        const seqArray = sequence.map((seq, index) =>
            <Sequence key={index} seq={seq} />
        );

        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}