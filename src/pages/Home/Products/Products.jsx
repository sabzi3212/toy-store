import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[])
    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className="text-6xl text-blue-300">Featured Toys</h3>
                <p className='text-3
                '>Find the best toy for your kid</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
                    {products.map(product => <Product key={product._id} product={product}></Product>)}
                </div>
            
        </div>
    );
};

export default Products;