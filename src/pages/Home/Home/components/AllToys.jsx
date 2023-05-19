/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TableCard from './TableCard';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])

    console.log("from allToys", allToys);
    return (
        <div className='bg-gradient-to-r from-[#871010] to-[#4e2c13] p-4'>
            <h2 className='text-center text-white text-2xl font bold mb-2'>Total Toys :{allToys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>


                            <th>Seller</th>
                            <th>Toy image and Name </th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allToys.map(toy => <TableCard
                                key={toy._id}
                                toy={toy}
                            ></TableCard>)
                        }

                        {/* row 1 */}
                        {/* <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr> */}
                        {/* row 2 */}


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default AllToys;