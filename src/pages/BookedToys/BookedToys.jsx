import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookedToyView from './BookedToyView';
import Swal from 'sweetalert2';
import { data } from 'autoprefixer';

const BookedToys = () => {
    const {user} = useContext(AuthContext);
    const [products, setProducts]= useState([]);

    const url = `https://assignment-11-server-tau-seven.vercel.app/toys?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[user]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?');
        if(proceed){
            fetch(`https://assignment-11-server-tau-seven.vercel.app/toys/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: 'Deleted Successfully',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      const remaining = products.filter(product => product._id !== id);
                      setProducts(remaining);

                }

            })
        }
    }

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
        products.map(product => <BookedToyView key={product._id} produc={product} handleDelete={handleDelete} ></BookedToyView>)
      }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default BookedToys;