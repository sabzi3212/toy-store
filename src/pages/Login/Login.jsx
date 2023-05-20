import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => console.log(error));


    }
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-10">
      
      <img className='h-[500px]' src="https://i.ibb.co/S6hChBP/amol-tyagi-0juktk-OTkp-U-unsplash.jpg" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value='login' />
        </div>
        </form>
        <p>Not registered yet! <Link to='/signup' className='text-indigo-600 text-center'>SignUp</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;