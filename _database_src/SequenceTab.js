import React from 'react';

export default class SequenceTab extends React.Component {

    componentDidMount() {
        this.node.scrollIntoView({behavior: "smooth", block: "start"});
    }

    render() {
        return (
            <table className="table is-bordered is-fullwidth" ref={node => this.node = node} style={{tableLayout: "fixed", margin: "20px 0 0 0"}}>
                <tbody>
                    <tr>
                        <th>Accession</th>
                        <td>{this.props.chosenSeq._id}</td>
                    </tr>
                    <tr>
                        <th>Host</th>
                        <td>{this.props.chosenSeq.host}</td>
                    </tr>
                    <tr>
                        <th>Definition</th>
                        <td>{this.props.chosenSeq.definition}</td>
                    </tr>
                    <tr>
                        <th>Sequence</th>
                        <td>
                            <div className="content" style={{maxWidth: "100%", maxHeight: "100px", overflow: "auto", wordWrap: "break-word"}}>
                                {this.props.chosenSeq.sequence}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}