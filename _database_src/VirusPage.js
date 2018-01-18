import React from 'react';

export default class VirusPage extends React.Component {

    handleClick(e) {
        e.preventDefault();
        console.log('button was clicked');
    }

    render() {
        const { name, abbreviation, isolates, _id,  } = this.props.virus;

        console.log(this.props);
        console.log(name);
        console.log(isolates);
        console.log(isolates[0]);
        console.log(isolates[0].source_name);

        const boxStyle = {
            borderRadius: "0", 
            boxShadow: "0 0", 
            border: "1px solid #d9d9d9"
        };

        const sourceType = isolates[0].source_type.charAt(0).toUpperCase() + isolates[0].source_type.slice(1);
        const sourceName = isolates[0].source_name;
        const sourceDefault = isolates[0].default ? "Yes" : "No";
        const sourceId = isolates[0].id;

        return (
            <div className="container">

                <h1 className="title is-4" style={{margin: "20px 0 20px 0"}}><span>{name}</span> <br /> <span className="subtitle" style={{fontSize: "16px", color: "gray"}}>{abbreviation}</span></h1>

                <table className="table is-bordered is-fullwidth">
                   <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <th>Abbreviation</th>
                            <td>{abbreviation}</td>
                        </tr>
                        <tr>
                            <th>Version</th>
                            <td>placeholder</td>
                        </tr>
                        <tr>
                            <th>Unique ID</th>
                            <td>{_id}</td>
                        </tr>
                    </tbody>
                 </table>

                <h2 className="title is-5"style={{margin: "0 0 0 0", padding: "0 0 10px 0"}}>Isolates</h2>

                 <hr style={{margin: "0 0 20px 0", padding: "0 0 0 0"}}/>

                <div className="tile is-ancestor">
                    <div className="tile is-4 is-vertical is-parent">
                        <div className="tile is-child" >
                            <table className="table is-bordered is-fullwidth">
                                <tbody>
                                    <tr>
                                        <td><strong>{sourceType} {sourceName}</strong></td> 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box" style={boxStyle}>
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
                            <h4><strong>Sequences</strong></h4>   
                            <br />
                            <a className="button is-fullwidth" onClick={this.handleClick}>
                                Hello
                            </a>                       
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}