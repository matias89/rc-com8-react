import React from 'react';
import MyButton from './MyButton';

const MyFooter = () => {
    return (
        <footer>
            <h5>Soy el pié de página</h5>
            <MyButton show={true} title="Botón en el footer" color="red" />
        </footer>
    );
};
export default MyFooter;