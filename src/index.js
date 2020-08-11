import React, { Component } from 'react';
import { render } from 'react-dom';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';

class App extends Component {
    render() {
        return (
            <div>
                <MyHeader />
                <MyMain />
                <MyFooter />
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));