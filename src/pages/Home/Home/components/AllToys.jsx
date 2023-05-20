/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TableCard from './TableCard';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch("https://toys-server-mostofaasik.vercel.app/allToys")
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])

    const handleSearch = () => {
        fetch(`https://toys-server-mostofaasik.vercel.app/searchToyName/${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllToys(data)
            })
    }


    return (
        <div className='bg-gradient-to-r from-[#871010] to-[#4e2c13] p-4'>
            <h2 className='text-center text-white text-2xl font bold mb-2'>Total Toys :{allToys.length}</h2>
            <div className='text-center ml-96 mt-2 mb-3'>
                <div className="form-control  mb-2">
                    <div className="input-group ">
                        <input type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search…"
                            className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

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