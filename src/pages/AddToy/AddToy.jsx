import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';


const AddToy = () => {
    const {user} = useContext(AuthContext);
    const handleAddToy = event =>{
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

        const toy = {
           title: name, email,
           img: photo, Sellername,
           sub_cat: subCategory, price, quantity, description
        }
        console.log(toy);

        fetch('https://assignment-11-server-tau-seven.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Toy Added!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <h2 className='text-center text-7xl mb-4'>Add Your Toy</h2>
            <form onSubmit={handleAddToy}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Picture</span>
          </label>
          <input name='photo' type="text" placeholder="photoURL" className="input input-bordered" />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
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
          <input type="submit" value='Add' className="btn btn-primary btn-block"/>
        </div>
            </form>
    </div>
    );
};

export default AddToy;