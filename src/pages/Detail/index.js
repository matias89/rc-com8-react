import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }
    componentDidMount() {
        const { match: { params: { id }} } = this.props;
        // Se ejecuta UNA SOLA VEZ cuando el componente se monta (se renderiza)
        window.fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                response.json()
                    .then(data => {
                        this.setState({
                            post: data
                        });
                    })
            });
    }
    render() {
        const { post: { title, body } } = this.state;
        return (
            <section>
                <h3>{title}</h3>
                <p>{body}</p>
            </section>
        );
    }
}

export default withRouter(Detail);