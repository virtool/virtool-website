import React from 'react';
import Sequence from './Sequence';

export default class IsolateTab extends React.Component {

    componentDidMount() {
        this.node.scrollIntoView({behavior: "smooth"});
    }

    render () {
        const sourceType = this.props.isoType;
        const sourceName = this.props.isoName;
        const isDefault = this.props.isDef;
        const isolateId = this.props.isoId;
        const sequences = this.props.isoSeq;

        const iconStyle = {
            borderRadius: "50%",
            backgroundColor: "#3c8786", 
            color: "white"
        };

        const seqArray = sequences.map((seq, index) =>
            <Sequence key={index} seq={seq} />
        );

        return (
            <div ref={node => this.node = node}>
                <h4>
                    <strong>
                        {sourceType} {sourceName}
                    </strong>
                </h4>
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
                            <td>{isDefault}</td>
                        </tr>
                        <tr>
                            <th>Unique ID</th>
                            <td>{isolateId}</td>
                        </tr>                        
                    </tbody>
                </table>
                <h4>
                    <strong>
                        Sequences &nbsp;
                    </strong> 
                    <span className="tag" style={iconStyle}>
                        {sequences.length}
                    </span>
                </h4>   
                <br />
                {seqArray}
            </div>
        );
    }
}
