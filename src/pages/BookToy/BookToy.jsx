import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const BookToy = () => {
    const product = useLoaderData();
    const{_id ,title, img, price, description} = product;
    const {user} = useContext(AuthContext);
    const handleBooking = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const price = form.price.value;
        const product = form.product.value;
        const order ={
            customerName: name,
            email,
            product,
            price,
            service: _id
        }
        console.log(order);
    }
    return (
        <div>
            <h2>Book your toy {title}</h2>
            <form onSubmit={handleBooking}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Buyer Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input readOnly defaultValue={user?.email} name='email' type="email" placeholder="Email" className="input input-bordered" />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input readOnly defaultValue={'$' + price} name='price' type="text" placeholder="Price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Prouduct Name</span>
          </label>
          <input readOnly defaultValue={title} name='product' type="text" placeholder="Product Name" className="input input-bordered" />
        </div>
            </div>
        <div className="form-control mt-6">
          <input type="submit" value='Book' className="btn btn-primary btn-block"/>
        </div>
            </form>
    </div>
    );
};

export default BookToy;