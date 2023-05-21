/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { createdUser, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, email, password);

        if (password.length < 6) {
            setError('Password minimum  6 charecters')
        }
        setSuccess('')

        createdUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                setSuccess("You are succesfull created an account")
                setError('')
                form.reset()
                logOut()
                navigate('/login')
                updateUserProfile(createdUser, name, photo)

            })
            .catch(error => {
                console.log(error.message)
            })

    }

    const updateUserProfile = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                console.log("User Update Succesfully");
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Register-{"MAS Toys Center"}</title>
            </Helmet>
            <div className="hero min-h-screen bg-gradient-to-r from-[#786c53] to-[#89a293]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center   p-6 bg-gradient-to-r from-[#786c53] to-[#89a293] ">
                        <h1 className="text-5xl font-bold mb-6">Register now!</h1>
                        <img src={logo} className='w-[300px] h-auto' />

                        <p className='text-base-300 mt-5'>ALready Have an Account?
                            <Link to='/login'><span className='text-primary'> LogIn here</span> </Link>
                        </p>
                        <br /><br />
                    </div>
                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <p className='mb-2 text-red-600'> {error}</p>
                            <p className='mb-2 text-red-600'> {success}</p>
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">PhotoUrl</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Url" className="input input-bordered" required />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />

                                </div>

                                <div className="form-control mt-6">
                                    {/* <button className="btn btn-primary">Login</button> */}
                                    <input className='btn btn-primary' type="submit" value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Register;