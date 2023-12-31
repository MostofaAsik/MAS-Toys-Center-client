/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToy = ({ toy, handleDelete }) => {

    const { _id, sellerName, subCategory, toyUrl, toyName, price, quantity } = toy;




    return (
        <tr>

            <td>{sellerName}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={toyUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>

                    </div>
                </div>
            </td>
            <td>
                {subCategory}
            </td>
            <td> {"$" + price}</td>
            <td>{quantity}</td>
            <th>

                <Link to={`/updatetoy/${_id}`}>
                    <button className="btn btn-success btn-xs">Update</button>
                </Link>


            </th>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline hover:bg-[#60620d]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>

    );
};

export default MyToy;