import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2'


const BookToy = () => {
    const product = useLoaderData();
    const{_id ,title, img, price} = product;
    const {user} = useContext(AuthContext);
    const handleBooking = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.userName.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            product: title,
            price: price,
            service_id: _id,
            img
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        },[user])
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Order Confirmed!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div>
            <h2 className='text-center text-7xl mb-4'>Book Your Toy</h2>
            <form onSubmit={handleBooking}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Buyer Name</span>
          </label>
          <input name='userName' type="text" placeholder="Name" className="input input-bordered" />
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
          <input readOnly defaultValue={'$'+ price} name='price' type="text" placeholder="Price" className="input input-bordered" />
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