import React from 'react';
import SequenceTab from './SequenceTab';

export default class Sequence extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
        };
    }

    handleClick = () => {
        this.setState({isActive: !this.state.isActive});
    }

    render() {
        const sequence = this.props.seq;

        const seqButtonStyle = {
            border: "1px solid #d9d9d9",
            padding: "10px 10px",
            margin: "0 0 -1px 0",
            backgroundColor: "#dcefef",
        };

        const defStyle = {
            display: "inline-block", 
            whiteSpace: "nowrap", 
            overflow: "hidden", 
            textOverflow: "ellipsis", 
            minWidth: "0",
            maxWidth: "60vw",
            verticalAlign: "top"
        };

        let renderChoice;

        if (this.state.isActive) {
            renderChoice = <SequenceTab chosenSeq={sequence} />
        } else {
            renderChoice = <div />
        }

        return (
            <React.Fragment>
                <a className="is-fullwidth" style={{borderRadius: "0", margin: "0 0 -1px 0", color: "black"}}>
                    <div className="is-fullwidth" style={seqButtonStyle} onClick={this.handleClick}>       
                        <span className="tag" style={{backgroundColor: "#3c8786", color: "white"}}>
                            {sequence._id}
                        </span> 
                            &nbsp; 
                        <span className="is-fullwidth" style={defStyle}>    
                                {sequence.definition} 
                        </span>
                        {renderChoice}
                    </div>
                </a>
            </React.Fragment>
        );
    }
}
