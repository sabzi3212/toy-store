import React from 'react';
import { Link } from 'react-router-dom';

const AllToy = ({product}) => {
    const { _id,title, description, price } = product;
    return (
        <div className="card w-96 glass">
            <figure><img  className='h-[300px] w-[800px]' src={product?.img} alt="car!" /></figure>
            <div className="card-body">
                <h2 data-aos="zoom-out-up" className="card-title">Car name: {title}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/products/${_id}`}>
                    <button className="btn btn-primary hover:btn-accent">View Details!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllToy;