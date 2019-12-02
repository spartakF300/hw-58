import React, {Component} from 'react';
import './Alert.css'

class Alert extends Component{
    state = {
        dismiss: this.props.dismiss || false,
    };
    clickHandler = () => {
        this.setState({dismiss : false}, this.props.dismiss)
};
    render(){
        return (
            <div
                onClick={this.props.dismissed ? this.clickHandler : undefined}
                className={'alert'}
                style={{display: this.state.dismiss ? 'block' : "none", background:this.props.type}}
            >
                <p>{this.props.children}</p>
                <button
                    style={{display: this.props.dismissed ? 'none' : 'block' }}
                    className={'btnAlert'}
                    onClick={this.clickHandler}
                >X</button>
            </div>
        )
    }
};

export default Alert;