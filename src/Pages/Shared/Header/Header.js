import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assests/image.png'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handlelogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-base-100 mt-2 mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <img className='h-16 rounded-full' src={img} alt="" />
                <a className=" normal-case text-xl">Thyroid <small className='font-bold text-red-700	'>Prediction</small></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    <Link to='/'><li><a>Home</a></li></Link>

                    <Link className='btn btn-outline btn-danger' to='/prediction'><li><a>Prediction</a></li></Link>
                    {/* <Link  to='/login'><li><a>Login</a></li></Link>
                    <Link  to='/signup'><li><a>SignUp</a></li></Link> */}
                    {user?.uid ?
                        <>
                           
                            <li className=' rounded '><button onClick={handlelogout}>sign out</button></li>
                        </>
                        :
                        <li className=' rounded '><Link to='/login'>Login</Link></li>}
                    <li className=' rounded '><Link to='/signup'>Signup</Link></li>
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default Header;