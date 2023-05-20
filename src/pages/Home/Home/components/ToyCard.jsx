/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToyCard = ({ toy }) => {

    const { _id, sellerName, subCategory, toyUrl, toyName, price, quantity, rating } = toy;

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleNavigate = () => {
        toast("You have to log in first to view details");

        navigate(from, { replace: true })

    }

    return (
        <div className="card card-side bg-base-100 shadow-xl p-2">
            <figure><img src={toyUrl} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p>Price: <span className='text-2xl'>{'$' + price}</span></p>
                <p>Rating: <span className='text-2xl'>{rating}</span></p>
                <div className="card-actions justify-end ml-4">
                    <Link to={`/toy/${_id}`}>
                        <button onClick={handleNavigate} className="btn btn-primary"> Details</button>
                    </Link>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default ToyCard;