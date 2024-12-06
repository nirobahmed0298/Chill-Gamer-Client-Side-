import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    let { setUser, logInUser, googleLogin } = useContext(AuthContext);
    let [error, setError] = useState('');
    let navigate = useNavigate();
    let handleLogin = e => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        logInUser(email, password)
            .then((result) => {
                setUser(result.user)
                Swal.fire({
                    title: "WelCome!",
                    text: "You succesFully Login.",
                    icon: "success"
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => setError(error.message));
    }
    let handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                setUser(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => { setError(err.message) })
    }

    return (
        <section>
            <div className='md:w-5/12 mx-auto my-10 shadow-2xl rounded-xl'>
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className='text-center text-2xl font-bold'>Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" name='email' className="input rounded-md input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name='password' className="input rounded-md input-bordered" required/>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {
                        error && <span className='text-red-500 text-sm my-1'>{error}</span>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-outline bg-green-400 border-none font-semibold text-white  rounded-md">Login</button>
                    </div>
                    <div className='text-center space-y-2'>
                        <h1 className='font-bold my-2'>Or</h1>
                        <button onClick={handleGoogleLogin} className='btn bg-white border px-20 text-lg rounded-md mr-2'><img className='w-8 h-8' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" /></button>
                        <button className='btn bg-white border px-20 text-lg rounded-md'><img className='w-8 h-8' src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="" /></button>
                    </div>
                    <p className='text-center my-2'>Don't have an account?please <Link to='/register' className='text-green-500 underline'>Register</Link></p>
                </form>
            </div>
        </section>
    );
};

export default Login;