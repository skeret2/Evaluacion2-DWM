import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Create = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/products/', formData);
            console.log('Respuesta del servidor:', response.data);
            alert('Producto guardado exitosamente');
            window.location.reload();
            
        } catch (error) {
            console.error('Error al guardar producto:', error.response.data);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Guardar producto</h2>

                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>

                <label>
                    Price:
                    <input type="text" name="price" value={formData.price} onChange={handleChange} />
                </label>

                <label>
                    Description:
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </label>

                <label>
                    Image:
                    <input type="text" name="image" value={formData.image} onChange={handleChange} />
                </label>

                <br />
                <Button type="submit">Guardar Producto</Button>
            </form>
        </div>
    );
}

export default Create;
