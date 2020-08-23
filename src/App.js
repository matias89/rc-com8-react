import React, { Component } from 'react';
import { render } from 'react-dom';
import MyHeader from './MyHeader';
import Card from './Card';
//import MyFooter from './src/MyFooter';
//import MyMain from './src/MyMain';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          posts: [],
          pop: "none",
          pep: "red",
          anterior : 0
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

  Card(){

    
    if(this.state.anterior == 0){
        this.setState({pop:"block"});
        this.setState({anterior:1});
        }
        else{
        this.setState({pop:"none"});
        this.setState({anterior:0});
        }

  }

  render() {
      const { posts } = this.state;
      return (
          <div className="container">
              {//<MyHeader
               //   content="¡Soy un encabezado!"
              //    onClick={() => alert('Hola!')}
              ///>
            }
              {/*<MyMain />*/}
              {posts.map(post => {
                  return (
                      <div className="card p-1">
                          <h2>{post.title}</h2>
                          <button className="btn btn-info" onClick={() => this.Card()}
                            >Mostrar detalle</button>
                          {
                              <Card title={post.title} description={post.body} display={this.state.pop} />
                          }
                      </div>
                  );
              })}
              {/*<MyFooter />*/}
          </div>
      );
  }
}

export default App;
