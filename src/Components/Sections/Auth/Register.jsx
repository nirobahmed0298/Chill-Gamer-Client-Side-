import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Register = () => {
    let { createUser, setUser, googleWithRegister, updateUserProfile } = useContext(AuthContext);
    let [error, setError] = useState('');
    let [successMsg, setsuccessMsg] = useState(false);
    let location = useLocation();
    let navigate = useNavigate();
    let handleRegister = e => {
        e.preventDefault()
        let name = e.target.name.value;
        let photo = e.target.PhotoUrl.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        setError('');
        setsuccessMsg('');
        if (password.length < 6) {
            setError('Password should be at least 6 characters.');
            return;
        }
        let passError = /^(?=.*[a-z])(?=.*[A-Z])/;
        if (!passError.test(password)) {
            setError('At least one uppercase, one lowercase character');
            return;
        }
        createUser(email, password)
            .then((result) => {
                let newUser = { name, email }
                //Send DB
                fetch('https://chill-gamer-server-lac.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(newUser)

                })
                setUser(result.user);
                setsuccessMsg(true)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate(location?.state ? location.state : '/')
                    })

            })
            .catch(error => {
                setError(error.message)
                setsuccessMsg(true)
            })

    }
    let handleGoogleRegister = () => {
        googleWithRegister()
            .then(result => {
                setUser(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => { setError(err.message) })
    }
    return (
        <div>
            <div className='md:w-5/12 mx-auto my-10 shadow-2xl rounded-xl dark:border'>
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className='text-green-500 text-center text-2xl font-bold'>Register</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Photo</span>
                        </label>
                        <input type="text" placeholder="Your Photo URL" name='PhotoUrl' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                    </div>
                    {
                        error && <span className="label-text text-red-500">{error}</span>
                    }
                    {
                        successMsg && <span className="label-text text-green-500">You succesFully register.</span>
                    }


                    <div className="form-control mt-6">
                        <button className="btn btn-outline bg-green-400 border-none font-semibold text-white">Register</button>
                    </div>
                    <div className='text-center space-y-2'>
                        <h1 className='font-bold my-2'>Or</h1>
                        <button onClick={handleGoogleRegister} className='btn bg-white border px-20 text-lg rounded-md mr-2'><img className='w-8 h-8' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" /></button>
                        <button className='btn bg-white border px-20 text-lg rounded-md'><img className='w-8 h-8' src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="" /></button>
                    </div>
                    <p className='text-center my-2'>Already have an account?please <Link to='/login' className='text-green-500 underline'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;