import React, {Component} from 'react';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, ModalHeader,ModalBody,ModalFooter} from 'reactstrap';

class MyModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      abierto: false
    }
  }

  abrirModal = () =>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){
    const {id,title,body} = this.props;
    return(
      <>
      <Button color="primary" onClick={this.abrirModal}>Ver más...</Button>
      <Modal className="border border-primary" isOpen={this.state.abierto}>
        <ModalHeader>
          <h6>{id}</h6>
          <h1><b>Título</b></h1>
          <h1>{title}</h1>
        </ModalHeader>
        <ModalBody>
          <h1><b>Descripción</b></h1>
          <h5>{body}</h5>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-danger" onClick={this.abrirModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
      </>
    );
  }
}

export default MyModal;