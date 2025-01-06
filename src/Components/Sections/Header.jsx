import React, { useContext, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Header = () => {
    let { user, LogOutUser } = useContext(AuthContext)
    let [dark, setDark] = useState(false);
    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    let links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/allreviews'>All Reviews</NavLink>
        <NavLink to='/addreviews'>Add Reviews</NavLink>
        <NavLink to='/myreview'>My Reviews</NavLink>
        <NavLink to='/watchlist'>Game WatchList</NavLink>
        {
            user ? '' : <NavLink to='/login'>Login</NavLink>
        }
    </>
    let navigate = useNavigate()
    let handleLogout = () => {
        LogOutUser()
            .then(() => {
                Swal.fire({
                    text: "You succesFully LogOut.",
                    icon: "success"
                })
                navigate('/')
            })
            .catch(error => (error.message))
    }
    return (
        <div className='fixed z-10 top-0 w-full bg-slate-200 bg-opacity-80 backdrop-blur-lg '>
            <div className="navbar w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl font-bold">Chill <span className='text-red-500'>Gamer.</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 items-center">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <button className='text-xl mr-4 border p-2 rounded-full border-green-500' onClick={() => darkModeHandler()}>
                            {

                                dark && <IoSunny /> // render sunny when dark is true
                            }
                            {
                                !dark && <IoMoon /> // render moon when dark is false
                            }
                        </button>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-52 rounded-full">

                                {
                                    user ? <img
                                        alt="User Profile"
                                        src={user && user.photoURL} />
                                        :
                                        <img src='https://img.icons8.com/?size=100&id=21441&format=png&color=000000'></img>
                                }
                            </div>
                        </div>
                        {
                            user &&
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 dark:text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    {
                                        user && <a className='font-semibold'>{user && user.displayName}</a>
                                    }
                                    {
                                        user && <a><span className='font-semibold'>Email</span>: {user && user.email.slice(0, 5)}***.com</a>
                                    }
                                </li>
                                <li>
                                    <button onClick={handleLogout} className='font-semibold'>Logout<FaSignOutAlt></FaSignOutAlt></button>
                                </li>

                            </ul>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;