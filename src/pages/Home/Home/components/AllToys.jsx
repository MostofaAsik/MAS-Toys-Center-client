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




                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default AllToys;