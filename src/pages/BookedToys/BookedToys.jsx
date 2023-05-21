import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const BookedToys = () => {
    const {user} = useContext(AuthContext);
    const [products, setProducts]= useState([]);

    const url = `http://localhost:5000/toys?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[user])
    return (
        <div>
            <h2 className='text-center text-5xl'>my toys {products.length}</h2>
        </div>
    );
};

export default BookedToys;