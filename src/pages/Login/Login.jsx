/* eslint-disable no-unused-vars */
import React from 'react';
import { FaArrowDown, FaGoogle, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Register = () => {


    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

    }

    return (
        <div className="hero min-h-screen  bg-gradient-to-r from-[#786c53] to-[#89a293]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center   p-6 bg-gradient-to-r from-[#786c53] to-[#89a293] ">
                    <h1 className="text-5xl font-bold mb-6">Login now!</h1>
                    <img src={logo} className='w-[300px] h-auto' />

                    <p className='text-base-300 mt-5 pr-2'>If you new?
                        <Link to='/register'><span className='bg-orange-600 p-2  text-black'> Register here</span> </Link>
                    </p>
                    <br /><br />
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                {/* <button className="btn btn-primary">Login</button> */}
                                <input className='btn btn-primary' type="submit" value="Register" />
                            </div>
                        </form>
                        <div>
                            <div className="divider">OR</div>
                        </div>
                        <div className='text-center'>
                            <h2>Google Login</h2>
                            <button className="btn btn-circle hover:bg-[#a32323]">
                                <FaGoogle></FaGoogle>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;