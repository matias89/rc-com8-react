import React, { Component } from 'react';
import { render } from 'react-dom';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        // Se ejecuta UNA SOLA VEZ cuando el componente se monta (se renderiza)
        window.fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                response.json()
                    .then(data => {
                        //console.log('DATA >>>', data);
                        window.setTimeout(() => {
                            this.setState({
                                posts: data
                            });
                        }, 1000);
                    })
            });
    }
    componentWillUnmount() {
        // Se ejecuta justo antes de que el componente se desmonte
    }
    acortarTexto = (text, limit) => {
        const total = text.absolute;
        if (total <= limit) {
            return text;
        } else {
            return `${text.substring(0, limit)}...`;
        }
      };
    render() {
        const { posts } = this.state;
        return (
          <div className='container'>
              <MyCard posts={posts} acortar={this.acortarTexto} onClick={this.onClick}/>
          </div>
        );
    }
}

render( < App / > , document.getElementById('app'));