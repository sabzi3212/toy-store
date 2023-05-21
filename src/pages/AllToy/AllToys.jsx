import React, { useEffect, useState } from 'react';
import AllToy from './AllToy';

const AllToys = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-11-server-tau-seven.vercel.app/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[])
    return (
        <div className='text-center text-5xl mt-5'>
            View All Available Toys

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-5'>
                    {products.map(product => <AllToy key={product._id} product={product}></AllToy>)}
                </div>
            
        </div>
    );
};

export default AllToys;