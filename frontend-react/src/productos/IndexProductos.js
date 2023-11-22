import React from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Delete from './Delete';


const IndexProductos = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error al obtener la lista de productos:', error);
        }
        };

        fetchProducts();
    }, []);

    return (
        <Table >
            <thead>
                <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                </tr>
            </thead>
            <tbody>
            {products.map((products) => (
                <tr key={products.id}>
                    <td>{products.name}</td>
                    <td>{products.price}</td>
                    <td>{products.description}</td>
                    <td>{products.image}</td>
                    <td><Delete productsId={products.id} /></td>
                </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default IndexProductos
