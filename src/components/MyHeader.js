import React, { Component } from 'react';
import MyButton from './MyButton';

class MyHeader extends Component {
    render() {
        return (
            <header>
                <h1>Soy un encabezado</h1>
                <MyButton />
            </header>
        );
    }
}

export default MyHeader;