import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Delete = ({ productsId }) => {

    const deleteProduct = async () => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/products/${productsId}`);
            window.location.reload();
        }
        catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    }

    return (
        <Button variant="danger" onClick={deleteProduct}>Delete</Button>
    )
}

export default Delete;
