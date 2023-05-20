import { useContext } from 'react';
import logo from '../../../assets/logo/7579208_42318-removebg-preview.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { signOut } from 'firebase/auth';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>All Toys</Link></li>
            {
                user?.email ?
                    <>
                        <li><Link to='/'>My Toys</Link></li>
                        <li><Link to='/'>Add Toys</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                    </>
                    :
                    <>
                        <li><Link to='/'>Blog</Link></li>
                    </>
            }


        </>
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-base-100 h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}

                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <button onClick={handleLogOut} className="btn btn-outline btn-primary">LogOut</button>
                        :
                        <Link to='/login'><button className="btn btn-outline btn-primary">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavigationBar;