import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: 'Torta de Chocolate', price: 15000 },
    { id: 2, name: 'Cheesecake de Frutilla', price: 12000 },
    { id: 3, name: 'Brownies', price: 8000 },
];

const ProductList: React.FC = () => {
    return (
        <div>
            <h2>Productos:</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
