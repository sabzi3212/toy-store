import React from 'react';

const Product = ({ product }) => {
    const { title, img } = product;
    return (
        <div className="card w-96 glass">
            <figure><img  className='h-[300px] w-[800px]' src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 data-aos="zoom-out-up" className="card-title">{title}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary hover:btn-accent">View Details!</button>
                </div>
            </div>
        </div>
    );
};

export default Product;