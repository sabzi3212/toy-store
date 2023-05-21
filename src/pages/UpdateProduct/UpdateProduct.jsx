import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const {user} = useContext(AuthContext);
    const toys =useLoaderData();
    const {_id, title, quantity} = toys;
    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const Sellername = form.Sellername.value;
        const email = form.email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = {
           title: name, email,
           img: photo, Sellername,
           sub_cat: subCategory, price, quantity, description
        }
        console.log(updatedToy);

        fetch(`https://assignment-11-server-tau-seven.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Toy Updated!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    
    }
    return (
        <div>
            <h2 className='text-center text-7xl mb-4'>Update Your Toy</h2>
            <form onSubmit={handleUpdate}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Picture</span>
          </label>
          <input name='photo' type="text" placeholder="photoURL" className="input input-bordered" />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text" defaultValue={title}>Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" className="input input-bordered" />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input name='Sellername' type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-Category</span>
          </label>
          <input name='subCategory' type="text" placeholder="SubCategory" className="input input-bordered" />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input name='price' type="text" placeholder="Price" className="input input-bordered" />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input name='quantity' type="text" placeholder="Price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input name='description' type="text" placeholder="Product Name" className="input input-bordered" />
        </div>
            </div>
        <div className="form-control mt-6">
          <input type="submit" value='Update' className="btn btn-primary btn-block"/>
        </div>
            </form>
    </div>
    );
};

export default UpdateProduct;