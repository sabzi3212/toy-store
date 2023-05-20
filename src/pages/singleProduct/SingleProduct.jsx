import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleProduct = () => {
    const product = useLoaderData()

    const{title, img, price, description} = product;
    return (
       
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-5 mb-5">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Car Model: {title}</h2>
    <p>{description}</p>
    <p>Price: ${price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    );
};

export default SingleProduct;