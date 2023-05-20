import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id,title, img } = product;
    return (
        <div className="card w-96 glass">
            <figure><img  className='h-[300px] w-[800px]' src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 data-aos="zoom-out-up" className="card-title">{title}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-center">
                    <Link to={`/products/${_id}`}>
                    <button className="btn btn-primary hover:btn-accent">View Details!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;