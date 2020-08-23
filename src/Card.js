import React, { Component } from 'react';
//import MyButton from './MyButton';

class Card extends Component {
    render() {
        const { title,description,display } = this.props;

        return (
                    <div class="card" style={{width: 18 + 'rem'}} style={{display}}>
                    <img src="..." class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">{title}</h5>
                      <p class="card-text">{description}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
        );
    }
}

//Card.defaultProps = {
//    color: 'yellow'
//}

export default Card;
//<MyButton onClick={onClick} show className="clase-custom" title="Botón en el header" color="green" />