import React from 'react';
import Isolate from './Isolate';
import _ from 'lodash';

export default function VirusPage (props) {

    const { name, abbreviation, isolates, _id } = _.find(props.virusData, { '_id':  props.match.params.id});

    const isolateComponents = isolates.map((isolate, index) =>
        <Isolate key={index} iso={isolate} />
    );

    const iconStyle = {
        borderRadius: "50%",
        backgroundColor: "#3c8786", 
        color: "white"
    };

    return (
        <div className="container">
            <h1 className="title is-4" style={{margin: "0 0 20px 0"}}>
                <span>
                    {name}
                </span> 
                <br /> 
                <span className="subtitle" style={{fontSize: "16px", color: "gray"}}>
                    {abbreviation}
                </span>
            </h1>

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
                </tbody>
            </table>

            <h2 className="title is-5"style={{margin: "0 0 0 0", padding: "0 0 10px 0"}}>
                Isolates &nbsp;
                <span className="tag" style={iconStyle}>
                    {isolates.length}
                </span>
            </h2>

            <hr style={{margin: "0 0 20px 0", padding: "0 0 0 0"}}/>

            <div className="tile is-ancestor">
                <div className="tile is-vertical is-parent">
                    {isolateComponents}
                </div>
            </div>
        </div> 
    );
}
