import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Virus extends React.Component {
    handleClick = (e) => {
        this.props.onClick(this.props.virus);
    };


    render() {
        const { name, abbreviation } = this.props.virus;

        const buttonStyle = {
            marginBottom: "10px",
            padding: "20px 0 20px 0 ",
            boxShadow: "2px 2px 5px 0 lightgray",
            borderRadius: "0"
        };

        return (
            
            <Link to={`/virus/${this.props.virus._id}`} className="button is-fullwidth" style={buttonStyle} virus={this.props.virus}>
                <div className={name}>
                    {name} <sub>{abbreviation}</sub>
                </div>
            </Link>
        );
    }
}