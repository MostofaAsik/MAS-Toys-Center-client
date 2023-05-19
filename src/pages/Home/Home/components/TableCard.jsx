/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const TableCard = ({ toy }) => {

    const { _id, sellerName, subCategory, toyUrl, toyName, price, quantity } = toy
    return (
        <tr>
            {/* <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th> */}
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
            <td>{"$" + price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/toy/${_id}`}>
                    <button className="btn btn-success btn-xs">details</button>
                </Link>
            </th>
        </tr>
    );
};

export default TableCard;