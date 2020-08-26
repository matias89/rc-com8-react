import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    render() {
        const { posts } = this.state;
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/posts">Posts</Link>
                                <Link className="nav-link" to="/contact">Contacto</Link>
                            </div>
                        </div>
                    </nav>
                    <Route path="/" exact component={() => <h3>Bienvenidos!</h3>} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/posts" exact>
                        {posts.map(post => {
                            return (
                                <div className="card p-1" key={post.id}>
                                    <h2>{post.title}</h2>
                                    <Link className="btn btn-info" to={`/posts/${post.id}/detail`}>Mostrar detalle</Link>
                                </div>
                            );
                        })}
                    </Route>
                    <Route path="/posts/:id/detail" component={Detail} />
                    <div className="container">
                        {/*<MyHeader
                            content="¡Soy un encabezado!"
                            onClick={() => alert('Hola!')}
                        />*/}
                        {/*<MyMain />*/}
                        {/*<MyFooter />*/}
                    </div>
                </div>
            </Router>
        );
    }
}

render(<App />, document.getElementById('app'));