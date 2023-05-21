import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookedToyView from './BookedToyView';

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
        <div className='mb-8'>
            <h2 className='text-center text-5xl mb-5'>View Your Added Toys</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Toy Name</th>
        <th>Seller Name</th>
        <th>Price</th>
        <th>Email</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        products.map(product => <BookedToyView key={product._id} produc={product}></BookedToyView>)
      }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default BookedToys;