import React, { Component } from 'react';
import MyButton from './MyButton';

class MyHeader extends Component {
    render() {
        const { content, color, onClick } = this.props;

        return (
            <header className="el-nombre-de-la-clase">
                <h1 style={{color}}>{content}</h1>
                <MyButton onClick={onClick} show className="clase-custom" title="Botón en el header" color="green" />
            </header>
        );
    }
}

MyHeader.defaultProps = {
    color: 'yellow'
}

export default MyHeader;