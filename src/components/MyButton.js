import React, { Component } from 'react';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonTitle: 'Hello World',
            contador: 0
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick() {
        const { onClick } = this.props;
        // this.state.contador = this.state.contador + 1; // ESTO ESTÁ MAL!!!
        this.setState({
            contador: this.state.contador + 1,
            buttonTitle: 'Bye World!'
        });
        onClick();
    }
    buildText() {
        return <span>Soy un párrafo!</span>;
    }
    render() {
        const { title, color, className, show } = this.props;
        return show ? (
            <button
                onClick={this.handleOnClick}
                className={className}
                style={{backgroundColor: color}}
            >
                {title} - {this.state.buttonTitle} - Clicks: {this.state.contador} - {this.buildText()}
            </button>
        ) : null;
    }
};

export default MyButton;