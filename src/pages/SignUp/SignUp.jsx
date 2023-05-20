import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
        const handleSignUp = (event)=>{
            event.preventDefault();
            const form = event.target;
            const name= form.name.value;
            const email = form.email.value;
            const photo = form.photo.value;
            const password = form.password.value;
            const user = {email, password, name, photo};
            console.log(user);
    
    
        }
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-10">
      
      <img className='h-[500px]' src="https://i.ibb.co/S6hChBP/amol-tyagi-0juktk-OTkp-U-unsplash.jpg" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-5xl font-bold text-center">Register now!</h1>
        <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value='SignUp' />
        </div>
        </form>
        <p>Already a member! <Link to='/signup' className='text-indigo-600 text-center'>Login</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;